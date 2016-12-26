var http = require('http');
var fs = require('fs');
var url = require('url');

var logger = require('./logger');
var newlineTrans = require('./newlineTransformer');
var markdownTrans = require('./markdownTransformer');
var limitTrans = require('./limitTransformer');

var handleRequest = function(request, response){

  var purl = url.parse(request.url, true);

  if(request.url === '/favicon.ico'){
    response.writeHead(200);
    response.end();
    return;
  } else if(purl.pathname === '/lipsum'){
    response.writeHead(200, {'Content-Type': 'text/html'});
    var file = fs.createReadStream('lipsum.txt');

    var limit = purl.query.limit;

    file.pipe(limitTrans(limit)).pipe(newlineTrans()).pipe(response);

    file.on("finished", function(){
      response.end();
    });

  } else if(request.url === '/markdown'){
    response.writeHead(200, {'Content-Type': 'text/html'});
    var file = fs.createReadStream('sample.md');

    file.pipe(markdownTrans()).pipe(response);

    file.on("finished", function(){
      response.end();
    });

  } else {
    response.writeHead(404);
    response.end("404 Not Found");
  }


  logger(request, response);

}

var server = http.createServer(handleRequest);

server.listen(7000, function(){
  console.log("Listening on port 7000");
});
