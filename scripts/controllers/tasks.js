angular
	.module("Tasks")
	.controller("MainController",function($scope, TasksService){
		$scope.tasks = TasksService.getTasks();
		$scope.tmpTask = {
			name: "",
			state: false
		};
		$scope.verifyNewTask = function($event) {
			if( $event.keyCode === 13) {
				TasksService.addTask($scope.tmpTask);
				$scope.tmpTask = {
					name: "",
					state: false
				}
				
			}

		}

		$scope.deleteTaskByIndex = function(index) {
		TasksService.deleteTask(index);
	    }
	

		$scope.editTask = function() {
			TasksService.editTask();
			
		}
	});

