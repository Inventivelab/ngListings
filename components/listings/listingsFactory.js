(function(){
  "use strict";

  angular
    .module("ngListings")
    .factory("listingsFactory", function($http){
      function getListings(){
        return $http.get("data/listings.json");
      }

      return{
        getListings: getListings
      }
      
    });
})();
