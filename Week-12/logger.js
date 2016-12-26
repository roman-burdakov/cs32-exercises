module.exports = function(request, response){
  var date = (new Date()).toString();
  var method = request.method;
  var status = response.statusCode;
  var url = request.url;
  var useragent = request.headers['user-agent'];

  console.log(date + " " + status + " " + method + " " + url);
};
