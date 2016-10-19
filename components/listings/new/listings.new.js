(function(){

  "use strict";

  angular
    .module('ngListings')
    .controller('newListingsController', function($scope, $state, $mdSidenav, $timeout, $mdDialog, listingsFactory){

      var vm = this;
      vm.closeSidebar = closeSidebar;
      vm.saveListing = saveListing;

      $timeout(function() {
        $mdSidenav('left').open();     
      });

      $scope.$watch('vm.sidenavOpen', function(sidenav){
        if(sidenav === false){
          $mdSidenav('left').close().then(function(){
            $state.go('listings');
          });
        }
      });

      function closeSidebar(){
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