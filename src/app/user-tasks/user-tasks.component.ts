import {Component, Input} from '@angular/core';
import {UserTasksService} from './user-tasks.service';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css'
})
export class UserTasksComponent {
  @Input({required:true}) userId!: string;
  @Input({required:true}) name!: string;
  addingNewTask = false;

  constructor(private taskService: UserTasksService) {}

  get userTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onAddNewUserTaskClick(open: boolean) {
    this.addingNewTask = open;
  }

}
