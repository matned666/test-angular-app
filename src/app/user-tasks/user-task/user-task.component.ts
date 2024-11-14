import {Component, Input} from '@angular/core';
import {TaskModel} from './task.model';
import {UserTasksService} from '../user-tasks.service';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {
  @Input({required: true}) userTask!: TaskModel;

  constructor(private userTaskService: UserTasksService) {}

  onCompleteTask() {
    this.userTaskService.removeTask(this.userTask.id)
  }
}
