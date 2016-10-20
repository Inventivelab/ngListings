(function(){
  "use strict";

  angular
    .module("ngListings")
    .factory("listingsDirectory", function(){
      return{
        templateUrl: "compponents/listings/ngDirectory/listing.tpl.html",
        scope: {
          listings: "listings",
          listingsFilter: "=listingsFilter",
          propertyType: "=propertyType"
        },
        controller: listingDirectoryController,
        controllerAs: "vm"
      }

      function listingDirectoryController($state, $scope, $mdDialog){

        var vm = this;
        vm editListing = editListing;
        vm.deleteListing = deleteListing;

        function editListing(listing){
          vm.editing = true;
          openSidebar();
          vm.listing = listing;
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
        };
      }
    })

})();
