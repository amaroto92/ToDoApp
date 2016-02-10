angular
	.module("Tasks")
	.service("TasksService", function(){

		if(typeof(Storage) !== "undefined") {
			
			if (localStorage.getItem("tasks") === null) {
				localStorage.setItem("tasks", "[]");
			}
			this.tasks = JSON.parse(localStorage.getItem("tasks"));
		} else {
			this.tasks = [];
		}

		this.getTasks = function(){
			
			return this.tasks;

		}
		this.addTask = function(newTask){
			this.tasks.push(newTask);
			localStorage.setItem("tasks", JSON.stringify(this.tasks));
		}
		this.deleteTask = function(index){
			this.tasks.splice(index, 1);
			localStorage.setItem("tasks", JSON.stringify(this.tasks));
		}
		this.editTask = function(){

			localStorage.setItem("tasks", JSON.stringify(this.tasks));
		}
	})