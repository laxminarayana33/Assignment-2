var app = angular.module('myApp', [])
app.controller('buyCtrl', function ($scope) {
  $scope.boughtList = []

  $scope.buyItems = [
    { id: '1', name: 'cokkies', quantity: 10 },
    { id: '2', name: 'cooldriks', quantity: 5 },
    { id: '3', name: 'meet', quantity: 4 },
    { id: '4', name: 'biscuties', quantity: 8 },
    { id: '5', name: 'black barbon', quantity: 10 },
    { id: '6', name: 'good day', quantity: 20 },
  ]
  $scope.message = ''

  // if(boughtList.length = 0)$scope.message = 'You did not bought anything yet'

  $scope.buy = function (item) {
    if (item) {
      $scope.boughtList.push({ id: item.id, name: item.name, quantity: item.quantity})
      $scope.buyItems.splice($scope.buyItems.indexOf(item), 1)
    }

  }
})
