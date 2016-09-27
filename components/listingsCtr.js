(function(){
  "use strict";
  angular
    .module("ngListings")
    .controller("listingsController", function($scope){
      $scope.listings =[

        {
          "id":"1",
          "title":"Napier Gardens Estat",
          "description":"Brand new and exquisitely finished 3 bedroom duplex with boysquarter at Ikota Villa Estate, Lekki-Lagos.",
          "price":80000,
          "posted":"2016-05-23",
          "contact": {
            "name":"Saka Balogun",
            "phone":"(234) 555-5555",
            "email":"saks@gmail.com"
          },
          "categories":[
            "Condo",
            "Warehouse"
          ],
          "image": "https://www.naijaproperty.com/files/pictures/picture_858.jpg",
          "views":453
        },
        {
          "id":"2",
          "title":"Lekki Peninsula",
          "description":"This property is situated at 16, Fawehinmi street Ojuelegba. By St. Catherine's model school and Yaba model Nursery and Primary school Surulere. This is a tenement building. (R/C) 1 plot.",
          "price": 100000,
          "posted": "2016-05-30",
          "contact": {
            "name": "Sam Jode",
            "phone": "(234) 555-9999",
            "email": "sam@gmail.com"
          },
          "categories": [
            "Single Home"
          ],
          "image":"https://www.naijaproperty.com/files/pictures/picture_1416.jpg",
          "views": 543
        },
        {
          "id":"3",
          "title":"Banana Island, Lagos",
          "description":"8 units of 3br terrace houses in 2 blocks built in form of a mini-estate.All room ensuite with additional visitor's toilet",
          "price":50000,
          "posted":"2016-06-23",
          "contact": {
            "name":"Manuel Soul",
            "phone":"(234) 555-5445",
            "email":"manuel@gmail.com"
          },
          "categories":[
            "Condo"
          ],
          "image":"https://www.naijaproperty.com/files/pictures/picture_1448.jpg",
          "views":345
        },
        {
          "id":"4",
          "title":"Crown Estate",
          "description":"Very good rental and resale values (This is surely a worthwhile investment)",
          "price":345000,
          "posted":"2015-11-01",
          "contact": {
            "name":"Teri Coker",
            "phone":"(234) 445-5555",
            "email":"teri@gmail.com"
          },
          "categories":[
            "Real Estate"
          ],
          "image":"https://www.naijaproperty.com/files/pictures/picture_1655.jpg",
          "views":456
        },
        {
          "id":"5",
          "title":"Blessed Assurance House. Sadiku",
          "description":"Few minutes drive off the Lekki-Epe expressway.",
          "price":500500,
          "posted":"2016-06-25",
          "contact": {
            "name":"Ball Pack",
            "phone":"(234) 555-4567",
            "email":"ball@gmail.com"
          },
          "categories":[
            "Apartments",
            "Mini-Flat"
          ],
          "image":"https://www.naijaproperty.com/files/pictures/picture_1665.jpg",
          "views":123
        },
        {
          "id":"6",
          "title":"Femi Okunnu way, Lekki, Lagos",
          "description":"Spacious bedrooms and sitting room.",
          "price":1150,
          "posted":"2015-11-02",
          "contact": {
            "name":"Duro Jaiye",
            "phone":"(234) 333-7777",
            "email":"duro@yahoo.com"
          },
          "categories":[
            "Real Estate",
            "Apartments"
          ],
          "image":"https://www.naijaproperty.com/files/pictures/picture_1668.jpg",
          "views":456
        }
        // {
        //   "id":"7",
        //   "title":"Ikota Villa Estate,, Lekki, Lagos",
        //   "description":"Spacious bedrooms and sitting room.",
        //   "price":10050,
        //   "posted":"2016-11-02",
        //   "contact": {
        //     "name":"Kunle bam",
        //     "phone":"(234) 456-0099",
        //     "email":"kunle@gmail.com"
        //   },
        //   "categories":[
        //     "Real Estate"
        //   ],
        //   "image":"https://www.naijaproperty.com/files/pictures/picture_905.jpg",
        //   "views":889
        // }
      ];
    });
})();
