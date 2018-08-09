'use strict';

angular.module('marvelSuperhero', ['ngRoute'])
  .component('marvelSuperhero', {
    templateUrl: 'marvel-superhero/marvel-superhero.html',
    controller: ['$scope', '$http', function MarvelCtrl($scope, $http) {
      $("#myInpt").on("input", function () {
        // console.log($(this).val().length);
        if ($(this).val().length > 0) {
          $(".sresults").show();
          ajaxify($(this).val());
        } else {
          $(".sresults").hide();
        }
      })
      function ajaxify(query) {
        $http({
          url: "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=69c83fd5adb3b977d2516a1d4588cf4a&hash=c6d40d1e49ed4f44e77a2adf6d55ec28&nameStartsWith=" + query + "&limit=6",
          method: "GET",
          headers: { "Content-Type": "application/json; charset=utf-8" }
        }).then(function (res) {
          $scope.fetched = res.data.data.results;
        })
      }
    }]
  });