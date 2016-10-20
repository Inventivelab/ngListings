(function(){

  "use strict";

  angular
    .module('ngListings')
    .controller('newListingsController', function($state, $scope, $mdSidenav, $timeout, $mdDialog, listingsFactory){

      var vm = this;
      vm.closeSidebar = closeSidebar;
      vm.saveListing = saveListing;

      vm.sidebarTitle = 'Add Listing';

      $scope.$watch('vm.sidenavOpen', function(sidenav){
        if(sidenav === false){
          $mdSidenav('left').close().then(function(){
            $state.go('listings');
          });
        }
      });

      $timeout(function() {
        $mdSidenav('left').open();     
      });

      function closeSidebar(){
        vm.listing = {};
        vm.sidenavOpen = false;
      }

      function saveListing(listing){
        if(listing){
          listing.contact = {
            name: "Said Maadan",
            email: "said@maadan.com",
            phone: "123-555-3333"
          }
          $scope.$emit('newListing', listing)
          vm.sidenavOpen = false;
        }
      }
    });
})();