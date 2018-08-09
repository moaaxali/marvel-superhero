'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'marvelSuperhero',
  'superheroDetail',
  'myApp.version'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
    .when('/marvel-superhero', {
      template: '<marvel-superhero></marvel-superhero>'
    })
    .when('/superhero-detail/:id', {
      template: '<superhero-detail></superhero-detail>'
    })
    .otherwise({ redirectTo: '/marvel-superhero' });
  }]);
