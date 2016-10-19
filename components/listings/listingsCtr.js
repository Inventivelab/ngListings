(function(){
  "use strict";
  angular
    .module("ngListings")
    .controller("listingsController", function($scope, listingsFactory, $mdSidenav, $mdToast, $mdDialog){

      var vm = this;

      vm.closeSidebar = closeSidebar;
      vm.editing;
      vm.editListing = editListing;
      vm.deleteListing = deleteListing;
      vm.listing;
      vm.listings;
      vm.openSidebar = openSidebar;
      vm.propertyTypes;
      vm.saveListing = saveListing;
      

      listingsFactory.getListings().then(function(listings){
        vm.listings = listings.data;
        vm.propertyTypes = getPropertyTypes(vm.listings);

      });

      var contact = {
        name: "Said Maadan",
        email: "said@maadan.com",
        phone: "123-555-3333"
      }

      function openSidebar(){
        $mdSidenav('left').open();
      }

      function closeSidebar(){
        $mdSidenav('left').close();
      }

      function saveListing(listing){
        if(listing){
          listing.contact = contact;
          vm.listings.push(listing);
          vm.listing = {};
          vm.closeSidebar();
          showToast("Listing saved");
        }
      }

      function editListing(listing){
        vm.editing = true;
        openSidebar();
        vm.listing = listing;
      }

      function saveEdit(){
        vm.editing = false;
        vm.listing = {};
        closeSidebar();
        showToast("Successfully edited your listing");
      }

      function deleteListing(event, listing){
        var confirm = $mdDialog.confirm()
          .title('Are you sure you want to delete ' + listing.title + "?")
          .ok('Delete')
          .cancel("Go Back")
          .targetEvent(event);
        $mdDialog.show(confirm).then(function(){
          var index = vm.listings.indexOf(listing);
          vm.listings.splice(index, 1);
        }, function(){

        });
        
      }

      function showToast(message){
        $mdToast.show(
          $mdToast.simple()
            .content(message)
            .position('top, right')
            .hideDelay(3000)
          )
      }

      function getPropertyTypes(listings){
        var propertyTypes = [];
        angular.forEach(listings, function(property){
          angular.forEach(property.propertyTypes, function(propertyType){
            propertyTypes.push(propertyType);
          });
        });
        return _.uniq(propertyTypes);
      }
      
    });
})();
