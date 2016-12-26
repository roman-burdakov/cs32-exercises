angular.module('resthitter').controller('ListController', ['People', function(People){
  var lc = this;
  /*
  lc.people = [
    {id: 1, name: "Steve", twitter: "@steveyeun"},
    {id: 2, name: "Norman", twitter: "@wwwbigbaldhead"},
    {id: 3, name: "Lauren", twitter: "@LaurenCohan"},
    {id: 4, name: "Danai", twitter: "@DanaiGurira"}
  ];
  */
  lc.people = People.query();

  // GET localhost:7000/people
  // People.get({id: 1})
  // GET localhost:7000/people/1
  // People.save()
  // POST localhost:7000/people
  // People.delete({id: 1})
  // DELETE localhost:7000/people/1

  lc.delete = function(id){
    People.delete({id: id}, function(){
      
    });
  };
}]);
