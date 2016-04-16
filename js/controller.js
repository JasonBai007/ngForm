
var ngForm = angular.module('myApp',['ui.bootstrap']);  

ngForm.controller('myCtrl',['$scope',function($scope){

	$scope.records = [];
	$scope.submit = function() {
	console.log($scope.user);
	// $scope.user.handle = "";
		
		var item = angular.copy($scope.user);
		$scope.records.push(item);
	}

	$scope.reset = function() {
		$scope.user = {};
	}

	$scope.open = function() {
		alert('haha');
	}



}]);
