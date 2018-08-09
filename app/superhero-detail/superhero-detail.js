'use strict';

angular.module('superheroDetail', ['ngRoute'])
  .component('superheroDetail', {
    templateUrl: 'superhero-detail/superhero-detail.html',
    controller: ['$scope', '$routeParams', '$http', 
      function SuperHeroDetailCtrl($scope, $routeParams, $http) {
        $http({
          url: `http://gateway.marvel.com/v1/public/characters/${$routeParams.id}?ts=1&apikey=69c83fd5adb3b977d2516a1d4588cf4a&hash=c6d40d1e49ed4f44e77a2adf6d55ec28`,
          method: "GET",
          headers: { "Content-Type": "application/json; charset=utf-8" }
        }).then(function (res) {
          $scope.character = res.data.data.results;
          console.log($scope.character);
        })
    }]
  });