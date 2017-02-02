(function (){
'use strict';


angular.module('myFirstApp',[])

.controller('MyFirstController',DIController)
.controller('ShoppingListController',ShoppingListController)
.filter('loves',LovesFilter)
.filter('truth',TruthFilter);

DIController.$inject = ['$scope','$filter','lovesFilter'];
function DIController  ($scope, $filter, lovesFilter){

    $scope.name = "";
    $scope.fullName = "";
    $scope.stateOfBeing = "hungry";
    $scope.cookieCost = .45;
    $scope.pc = this;
    $scope.pc.stateOfBeing = "hungry";

    $scope.upper = function() {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
    };
    $scope.sayMessage = function () {
       var output = $filter('uppercase')( "LIKES to eat healthy veggies");
       return  output;
    };

    $scope.sayLoveMessage = function () {
      var output = lovesFilter($scope.sayMessage());
      return  output;
   };

    $scope.feedGuy = function () {
      $scope.stateOfBeing = "fed";
    };
}

ShoppingListController.$inject = ['$scope'];
function ShoppingListController ($scope) {

   console.log("$scope.stateOfBeing: ", $scope.stateOfBeing);
   console.log("CHILD $scope: ", $scope);

  $scope.shoppingList1 = shoppingList1;

  $scope.shoppingList2 = shoppingList2;

  $scope.addNewItem = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };
    $scope.shoppingList2.push(newItem);
  };

}

function LovesFilter() {
  return function (input) {
    input = input || "";
    input = input.replace("LIKES","loves");
    return input;
  };
}

function TruthFilter () {
  return function (input, target, replace) {
    input = input || "";
    input = input.replace(target,replace);
    return input;
  }
}

  var shoppingList1 = [
    "Milk","Donuts","Cookies","Lettuce","Bagels"
  ];
  var shoppingList2 = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "3"
    },
    {
      name: "Cookies",
      quantity: "100"
    },
    {
      name: "Lettuce",
      quantity: "150"
    },
    {
      name: "Bagels",
      quantity: "15"
    }
  ];

  var parent = {}

})();
