 var app= angular.module('PopupDemo',['ui.bootstrap','pascalprecht.translate']);
 var todo;
app.controller('PopupDemoCont', ['$scope','$uibModal','$translatePartialLoader','$translate'
 	,function ($scope, $uibModal,$translatePartialLoader,$translate
) {

    $scope.todo_data = [{
        task_id: "100",
        task_name: "Task 1"
    }, {
        task_id: "101",
        task_name: "Task 2"
    }, {
        task_id: "102",
        task_name: "Task 3"
    }, {
        task_id: "103",
        task_name: "Task 4"
    }, {
        task_id: "104",
        task_name: "Task 5"
    }, {
        task_id: "105",
        task_name: "Task 6"
    }];
    todo=$scope.todo_data;
$scope.open = function () {
console.log('opening pop up');
 var modalInstance = $uibModal.open({
 	controller: 'PopupDemoCont1',
templateUrl: 'popup.html',

});
}
$scope.name='';
  $scope.check = function() {
    var size = $scope.name.length;
    if (size > 8) {
      $scope.strength = 'strong';
    } else if (size > 3) {
      $scope.strength = 'medium';
    } else {
      $scope.strength = 'weak';
    }
  };
      $scope.remove = function(index) {
        angular.forEach($scope.todo_data, function(value, key) {
            if (index == key) {
                if ($scope.todo_data[key].cheked == true) {
                    if (confirm(value.task_name + " is deleting") == true) {
                        $scope.todo_data.splice(key, 1);
                    }

                } else {
                    alert("checkbox is not checked");
                }
            }
        })
    }
$scope.trans=function(ln){

	$translatePartialLoader.addPart('home'); 
	$translate.use(ln);
}
setTimeout(function(){$scope.trans($scope.lang)},100)

}]);
  angular.module('PopupDemo').controller('PopupDemoCont1', ['$scope','$uibModalInstance',function ($scope,$uibModalInstance) {
  $scope.todo_data = [];
   
    console.log("hi11");
    $scope.addData = function() {
    	console.log("hi");
    	var addtask_id = $scope.task_id;
     var addtask_name = $scope.task_name;
      var obj = {
            task_id: addtask_id,
            task_name: addtask_name
        };
           var f = 1;
        angular.forEach($scope.todo_data, function(value) {
            if (value.task_id == addtask_id) {
                alert("task id is already exists..!");
                f = 0;
            }
        });
         if (addtask_name != undefined) {
            if (f == 1) {
              $scope.todo_data.push(obj);
              todo.push(obj);

            }
        } else {
            alert(" invalid task_name");
        }
        console.log(todo);
    };


  $scope.cancel = function () {
 $uibModalInstance.dismiss('cancel');
            };
 }]);
  
app.config(['$translateProvider','$translatePartialLoaderProvider', function ($translateProvider,$translatePartialLoaderProvider){
 			$translateProvider.useLoader('$translatePartialLoader', {
  			urlTemplate: '/trans/home/{lang}.json'
				});

 		}]) 
