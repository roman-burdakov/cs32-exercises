var app = angular.module('logintrest', []);

app.controller('FormController', function(){
  var vm = this;
  vm.logins = [];

  vm.login = function(){
    console.log("logging in!");
    vm.logins.push({username: vm.username, time:new Date()});
    vm.username = '';
    vm.password = '';
  };

});
