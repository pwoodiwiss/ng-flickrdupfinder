'use strict';

require('angular-route');

angular.module('flickrDupFinder', ['ngRoute', require('./controllers').name])
  .config(['$routeProvider', function($routeProvider) {
    // the oauth redirect callback page must be matched with .otherwise
    $routeProvider
      .otherwise({
        templateUrl: 'partials/photos.html',
        controller: 'photoCtrl',
        resolve: { 'Flickr': 'Flickr' }
      });
  }]);
