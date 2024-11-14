import {NewTaskData} from './user-task/task.model';
import {Injectable} from '@angular/core';
import {DUMMY_TASKS} from './dummy-tasks';

@Injectable({providedIn: 'root'})
export class UserTasksService {

  private tasks = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => userId === task.userId);
  }

  addTask(userId: string, newTask: NewTaskData) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date
    })
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

}
