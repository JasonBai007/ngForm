
var ngForm = angular.module('myApp',['ui.bootstrap']);  

ngForm.controller('myCtrl',['$scope',function($scope){

	// 初始化
	$scope.user = {};
	$scope.records = [];
	$scope.areas = ["海淀","朝阳","丰台","昌平","通州","大兴","亦庄","密云","顺义","房山"];

	// 提交当条记录
	$scope.submit = function() {		
		var item = angular.copy($scope.user);
		$scope.records.push(item);
		$scope.user = {};
	}

	// 重置表单
	$scope.reset = function() {
		$scope.user = {};
	}

	// 编辑记录
	$scope.edit = function ($index) {
		var i = $index;
		$scope.user = angular.copy($scope.records[i]);
	}

	// 删除记录
	$scope.del = function($index) {
		var i = $index;
		$scope.records.splice(i,1);
	}



}]);

