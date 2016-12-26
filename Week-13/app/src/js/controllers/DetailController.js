angular.module('resthitter')
.controller('DetailController', ['People', '$routeParams', '$location', function(People, $routeParams, $location){
  var dc = this;
  //dc.person = {id: 1, name: "Placeholder", twitter: "@placeholder"};
  // $routeParams.id

  if($routeParams.id !== undefined){
    dc.person = People.get({id: $routeParams.id});
    // GET localhost:7000/people/1
  } else {
    dc.person = new People();
  }

  dc.save = function(){
    //People.save({}, dc.person, function(){});
    dc.person.$save().then(function(){
      $location.path('/');
    });
    // POST .../people
  };

}]);
