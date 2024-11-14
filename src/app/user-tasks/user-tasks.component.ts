import {Component, Input} from '@angular/core';
import {UserTaskComponent} from './user-task/user-task.component';
import {DUMMY_TASKS} from './dummy-tasks';
import {AddNewUserTaskComponent} from './add-new-user-task/add-new-user-task.component';
import {type NewTaskData, type TaskModel} from './user-task/task.model';
import {UserTasksService} from './user-tasks.service';

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
