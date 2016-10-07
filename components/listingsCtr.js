(function(){
  "use strict";
  angular
    .module("ngListings")
    .controller("listingsController", function($scope, listingsFactory){
      listingsFactory.getListings().then(function(listings){
        $scope.listings = listings.data;
      })
      
    });
})();
