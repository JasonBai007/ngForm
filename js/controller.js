
var ngForm = angular.module('myApp',['ui.bootstrap']);  

ngForm.controller('myCtrl',['$scope',function($scope){

	// 初始化
	$scope.user = {};
	$scope.records = [];
	$scope.areas = ["海淀","朝阳","丰台","昌平","通州","大兴","亦庄","密云","顺义","房山"];
	$scope.isEdit = false;
	$scope.editIndex = 0;

	// 提交当条记录
	$scope.submit = function() {

		// 得到表单的值
		var NewRecord = angular.copy($scope.user);

		// 首先判断是否启用编辑
		if($scope.isEdit) {
			$scope.records.splice($scope.editIndex,1,NewRecord);			
			$scope.isEdit = false;  //编辑完记得复原全局变量
		} else {
			$scope.records.push(NewRecord);
		}
		// 清空表单	
		$scope.user = {};
	}

	// 重置表单
	$scope.reset = function() {
		$scope.user = {};
	}

	// 编辑记录【只有单击编辑时，$scope.isEdit 才为 true，其余时刻都为false】
	$scope.edit = function ($index) {
		$scope.isEdit = true;
		$scope.editIndex = $index;
		$scope.user = angular.copy($scope.records[$scope.editIndex]);
	}

	// 删除记录
	$scope.del = function($index) {
		var i = $index;
		$scope.records.splice(i,1);
		$scope.isEdit = false;
		$scope.user = {};
	}

}]);

