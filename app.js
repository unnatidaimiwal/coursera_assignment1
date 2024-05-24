(function(){
    'use strict';

    angular.module('LunchApp',[])

    .controller('LunchController',  LunchController)
    LunchController.$inject = ['$scope'];
function LunchController($scope) {
        $scope.name = "";
        $scope.output = "Please enter data first";
        $scope.displayOutput = function () {
                if ($scope.name.length == 0) {
                  $scope.output = 'Please enter data first';
                  return;
                } 
                else {
                  let listItems = $scope.name.split(',').filter(value => value.trim().length!=0);
                  if (listItems.length <= 3) {
                    $scope.output = 'Enjoy!';
                  }
                  else {
                    $scope.output = 'Too much!';
                  }      
                }
              }

            }
   

})();