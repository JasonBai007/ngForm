
var ngForm = angular.module('myApp',['ui.bootstrap']);  

ngForm.controller('myCtrl',['$scope','$uibModal',function($scope,$uibModal){

	$scope.records = [];
	$scope.areas = ["海淀","朝阳","丰台","昌平","通州","大兴","亦庄","密云"];
	$scope.submit = function() {
	console.log($scope.user);
		
		var item = angular.copy($scope.user);
		$scope.records.push(item);
	}

	$scope.reset = function() {
		$scope.user = {};
	}

	// 配置删除弹框
	$scope.open = function(size) {
		var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: 'myModalContent.html',
			controller: 'ModalInstanceCtrl',
			size: size			
		});
	}



}]);

// 弹出模块示例控制器
ngForm.controller('ModalInstanceCtrl',['$scope','$uibModalInstance',function($scope, $uibModalInstance){
	$scope.ok = function () {
	   $uibModalInstance.close();
	 };

	$scope.cancel = function () {
	  $uibModalInstance.dismiss('cancel');
	};



}]);
