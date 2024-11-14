import {DUMMY_TASKS} from './dummy-tasks';
import {NewTaskData} from './user-task/task.model';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserTasksService {

  private tasks = DUMMY_TASKS;

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
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

}
