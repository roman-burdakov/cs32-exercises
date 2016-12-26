var Transform = require('stream').Transform;
var markdown = require('markdown').markdown;

module.exports = function(){
  var parse = new Transform();
  parse._transform = function(data, encoding, done){
    this.push(markdown.toHTML(data.toString()));
    done();
  };

  return parse;

};
