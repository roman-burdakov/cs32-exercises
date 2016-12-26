# Week 12: Node and Stuff
*where "stuff" is probably best described as "streams"*
*yes, I could have just said "streams", but it's too late now*

## Initialize a Node app

1. `npm init`

## Get a file from the file system
*together*

1. Create a file named read.js
2. Add the 'fs' library to the file
  * `var fs = require('fs');`
3. Read the filestream to "lipsum.txt" (provided in this repo)
  * `var file = createReadStream('lipsum.txt');`
4. Listen for the "readable" event
  * `file.on("readable", function(){ ... });`
5. Loop through the chunks of `file.read()` in the `readable` event
  * `var chunk = null;`
  * `while(null !== (chunk = file.read())){ ... }`
6. `console.log` out the chunks as you get them from `file.read()`
7. Listen for the "end" event on `file` and `console.log` something

*or you can use `file.on('data', function(chunk){ ... });`*

## `pipe`

1. Change the `console.log()` in the while chunk mess to be `process.stdout.write()`
  * Note 1: `console.log` just calls `process.stdout.write` with some formatting and a newline at the end
  * Note 2: `process.stdout` is a writable stream
2. Comment out the whole `file.on("readable"...` block
3. Pipe the `file` (readable stream) to `process.stdout` (a writable stream)
  * doing that chunk stuff is necessary sometimes, but whenever you can, you should just `pipe` stuff along

## Run a server
*together*

1. Add the `http` library to the file
2. Create a server
  * `var server = http.createServer(function(request, response){ ... });`
3. Write to the header on the response (a writable stream)
  * `response.writeHead(200, {'Content-Type': 'text/html'});`
4. End the stream and write something at the end
  * `response.end("okay");`
  * Note: `end('something')` is just shorthand for `write('something');` followed by `end()`
5. Listen on 7000 (or whatever)
  * `server.listen(7000)`
6. Add a message to your console to let you know you're listening and on what port
```
server.listen(7000, function(){
 console.log("listening on 7000");
});
```
**Run server and check it in a browser**

*It might be more clear if you move the anonymous function to a "handleRequest" method.*

## Nodemon

1. `npm install -g nodemon`
  * [Nodemon](http://nodemon.io/)
2. Use `nodemon something.js` to run your node files and they will automatically be updated

## Piping Lipsum
*on your own*

1. Require the `fs` lib
2. Create a readable stream just like we did earlier off of the "lipsum.txt" file
3. `pipe` that stream to the server response
*Note: Make sure your `createReadStream` is happening inside the response, otherwise it will only happen once*

## Log the request
*together*

1. Get the time
  * `new Date();`
    * `.toString()`
    * `.toISOString()`
    * `.toJSON()`
2. Get the method
  *  `request.method`
3. Get the url hit
  * `request.url`
4. Get the `user-agent` (from `request.headers`)

## Short out the `/favicon.ico`
*together*

1. Check the `request.url`
2. Respond with a 200
3. `return`

## Edit the stream!
*together*

1. Require `stream`
  * specifically, we're going to need `stream.Transform`
  * `var Transform = require('stream').Transform;`
2. Create a new parser from the `Transform`
  * `var parser = new Transform();`
3. Define the transform method
  * `parser._transform = function(data, encoding, done){`
  * `  this.push(data);`
  * `  done();`
  * `};`
4. Alter data before pushing it to replace the `\n`s with `<br>`s
  * `data = data.toString().replace(/\n/g, '<br>');`
5. Add the parser to the piped stream
  * `file.pipe(parser).pipe(response);`

*Note: make sure the parser gets reset every request, each transform is its own stream, and once it reaches the end of the stream, it's done. So it won't work more than once unless it's reset.*

## Clean it up: Move logger to a module
*together*

1. Create a `logger.js` file
2. Move the functionality to that file
  * assign the functionality to `module.exports`
  * give it `request` and `response` parameters
  * now when you `require` that module, the variable will be a function
3. Require that file in your app
  * `var logger = require('./logger');`
4. Use that `logger()` function

## Clean it up: Move the Transform to a module
*on your own*

1. Create a `newlineTransformer.js` file
2. Move the functionality to that file
  * you want to return the `parser`
  * because it uses `new` you're going to have to run the code every time
  * so return a function and calling that function will execute the new
3. Require that file in your app
  * `var newlineTransformer = require('newlineTransformer');`
4. Use the function in your `pipe` stream
  * `.pipe(newlineTransformer())`

## Routing!
*on your own*

1. We already created a route for '/favicon.ico'
2. Create a route for '/lipsum'
  * `if(request.url === '/lipsum'){ ... }`
3. Move all lipsum related such to that route
4. Else send a header for a 404 error
  * `response.writeHead(404);`
5. And just end the response with a message to the user
  * `response.end("404 Not Found");`

## Create a "sample" route for markdown
*together*

1. Just copy the '/lipsum' route and make it look at the 'sample.md' file

## Process Markdown
*together*

1. `npm install markdown`
2. Require the module
  * `var markdown = require( "markdown" ).markdown;`
  * it is used like this: `markdown.toHTML("I can't actually put real markdown in this example but let's pretend I did");`
3. Create a markdown parser
  * the same way we created the other transformers
  * in a module
  * `this.push(markdown.toHTML(data.toString()));`
4. Add the new parser to the markdown route

## Do a route for the README
*together*

1. Copy everything you did for the markdown route
2. Since they're doing the same thing, create a function to `handleMarkdown`

## Get a GET param

1. Require the 'url' lib
  * `var url = require('url');`
2. Set a parsed url variable
  * `var purl = url.parse(request.url, true);`
    * *where purl is short for "parsed url"*
    * *true is referring to if we want to parse request parameters!*
3. `console.log` the query params
  * `console.log(purl.query);`

## Get only the first X characters with a GET parameter
*on your own?*

1. Change the route definition to use the parsed url param of `pathname`
  * `if(purl.pathname === '/lipsum'){ ... `
2. Get a "limit" parameter from the GET request
  * `purl.query.limit`
3. Add a new limit parser module
4. Have the module take a limit param and pass that
  * `module.exports = function(limit){ ... }`
  * `var limitTransformer = require('./limitTransformer');`
5. `pipe` the stream through that limit parser
  * `.pipe(limitTransformer(limit)).`
6. Using `limit` in the limit parser, track how many character you're letting through
  * *remember these are data chunks*

*Example: (I'll bet you can do better!)*

```
parser._transform = function(){
  if(limit === undefined){
    this.push(data);
    done();
  } else {
    if(this.limit > data.toString().length){
      this.push(data);
      this.limit - data.toString().length;
    } else if(this.limit > 0 && this.limit < data.toString().length){
      this.push(data.toString().substr(0, this.limit));
      this.limit = 0;
    }
    done();
  }
};
```
