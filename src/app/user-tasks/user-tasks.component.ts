import { Component, Input } from '@angular/core';
import {UserTaskComponent} from './user-task/user-task.component';
import {DUMMY_TASKS} from './dummy-tasks';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [
    UserTaskComponent
  ],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css'
})
export class UserTasksComponent {
  @Input({required:true}) userId?: string;
  @Input({required:true}) name?: string;

  tasks = DUMMY_TASKS;

  get userTasks() {
    return this.tasks.filter((task) => this.userId === task.userId);
  }


}
