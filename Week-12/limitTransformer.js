var Transform = require('stream').Transform;

module.exports = function(limit){
  var parse = new Transform();

  parse._transform = function(data, encoding, done){
    this.push(data.toString().substr(0, limit));
    done();
  };

  return parse;

};
