'use strict';

/* your code goes here! */
class Task {
	constructor(description, complete) {
		this.description = description;
		this.complete = complete;
	}

	render() {
		let r = document.createElement('li');
		r.innerHTML = this.description;
		if (this.complete == true) {
			r.classList.add("font-strike");
		}
		r.addEventListener('click', () => {
			this.toggleFinished();
			r.classList.toggle("font-strike");
		});
		return r;
	}

	toggleFinished() {
		if (this.complete == true) {
			this.complete = false;
		} else {
			this.complete = true;
		}
	}
}

class TaskList {
	constructor(tasks) {
		this.tasks = tasks;
	}

	addTask(description) {
		let newTask = new Task(description, false);
		this.tasks.push(newTask);
	}

	render() {
		let r = document.createElement('ol');
		this.tasks.forEach(liElem => r.appendChild(liElem.render()));
		return r;
	}
}

class NewTaskForm {
	constructor(submitCallback) {
		this.submitCallback = submitCallback;
	}

	render() {
		let r = document.createElement('form');
		let input = document.createElement('input');
		input.classList.add("form-control", "mb-3");
		input.setAttribute('placeholder', "What else do you have to do?");
		let button = document.createElement('button');
		button.classList.add("btn", "btn-primary");
		button.innerHTML = "Add task to list";
		button.addEventListener('click', (event) => {
			event.preventDefault();
			this.submitCallback(input.value);
		});
		r.appendChild(input);
		r.appendChild(button);
		return r;
	}
}

class App {
	constructor(parentElement, taskList) {
		this.parentElement = parentElement;
		this.taskList = taskList;
	}

	render() {
		this.parentElement.append(this.taskList.render());
		let form = new NewTaskForm((description) => {this.addTaskToList(description)});
		this.parentElement.append(form.render());
		return this.parentElement;
	}

	addTaskToList(description) {
		this.taskList.addTask(description);
		this.parentElement.innerHTML = "";
		this.render();
	}
}

let newTasks = [
	new Task('Make some classes', true),
	new Task('Arrow some functions', false)
];
var app = new App(document.querySelector('#app'), new TaskList(newTasks));
app.render();

//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof Task !== 'undefined') 
    module.exports.Task = Task;
  if(typeof TaskList !== 'undefined') 
    module.exports.TaskList = TaskList;
  if(typeof NewTaskForm !== 'undefined') 
    module.exports.NewTaskForm = NewTaskForm;
  if(typeof App !== 'undefined') 
    module.exports.App = App;
}
