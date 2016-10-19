(function(){

  "use strict";

  angular
    .module('ngListings')
    .controller('editListingsController', function($scope, $state, $mdSidenav, $timeout, $mdDialog, listingsFactory){

      var vm = this;
      vm.closeSidebar = closeSidebar;
      vm.saveEdit = saveEdit;
      vm.listing = $state.params.listing;

      $timeout(function() {
        $mdSidenav('left').open();     
      });

      $scope.$watch('vm.sidenavOpen', function(sidenav){
        if(sidenav === false){
          $mdSidenav('left')
            .close()
            .then(function(){
              $state.go('listings');
            });
        }
      });

      function closeSidebar(){
        vm.sidenavOpen = false;
      }

      function saveEdit(){
        $scope.$emit('editSaved', 'Edit Saved.')
        vm.sidenavOpen = false;
      }

      // function saveEdit(listing){
      //   if(listing){
      //     listing.contact = {
      //       name: "Said Maadan",
      //       email: "said@maadan.com",
      //       phone: "123-555-3333"
      //     }
      //     $scope.$emit('newListing', listing)
      //     vm.sidenavOpen = false;
      //   }
      // }
    });
})();