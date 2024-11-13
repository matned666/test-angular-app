import {Component, Input} from '@angular/core';
import {UserTaskComponent} from './user-task/user-task.component';
import {DUMMY_TASKS} from './dummy-tasks';
import {AddNewUserTaskComponent} from './add-new-user-task/add-new-user-task.component';
import {TaskModel} from './user-task/task.model';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [
    UserTaskComponent,
    AddNewUserTaskComponent
  ],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css'
})
export class UserTasksComponent {
  @Input({required:true}) userId?: string;
  @Input({required:true}) name?: string;
  addingNewTask = false;

  tasks = DUMMY_TASKS;

  get userTasks() {
    return this.tasks.filter((task) => this.userId === task.userId);
  }

  addNewTask(task: TaskModel) {
    task.id = this.generateNextId();
    this.tasks = [...this.tasks, task];
    this.addingNewTask = false;
  }

  onAddNewUserTaskClick(open: boolean) {
    this.addingNewTask = open;
  }

  removeGivenTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  private generateNextId(): string {
    const maxId = Math.max(...this.tasks.map(task => parseInt(task.id.slice(1), 10)));
    return `t${maxId + 1}`;
  }
}
