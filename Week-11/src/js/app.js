angular.module('directings', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/controller', {
    templateUrl: "templates/controller.html"
  })
  .when('/directive', {
    templateUrl: "templates/directive.html  "
  })
  .otherwise({
    redirectTo: '/controller'
  });


}]);
