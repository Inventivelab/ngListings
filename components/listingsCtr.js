(function(){
  "use strict";
  angular
    .module("ngListings")
    .controller("listingsController", function($scope, listingsFactory, $mdSidenav, $mdToast){
      listingsFactory.getListings().then(function(listings){
        $scope.listings = listings.data;
      });

      var contact = {
        name: "Said Maadan",
        email: "said@maadan.com",
        phone: "123-555-3333"
      }

      $scope.openSidebar = function(){
        $mdSidenav('left').open();
      }

      $scope.closeSidebar = function(){
        $mdSidenav('left').close();
      }

      $scope.saveListing = function(listing){
        if(listing){
          listing.contact = contact;
          $scope.listings.push(listing);
          $scope.listing = {};
          $scope.closeSidebar();
          showToast("Listing saved");
        }
      }

      $scope.editListing = function(listing){
        $scope.editing = true;
        $scope.openSidebar();
        $scope.listing = listing;
      }

      $scope.saveEdit = function(){
        $scope.editing = false;
        $scope.listing = {};
        $scope.closeSidebar();
        showToast("Successfully edited your listing");
      }

      function showToast(message){
        $mdToast.show(
          $mdToast.simple()
            .content(message)
            .position('top, right')
            .hideDelay(3000)
          )
      }
      
    });
})();
