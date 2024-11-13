import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskModel} from './task.model';

@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {
  @Input({required: true}) userTask?: TaskModel;
  @Output() taskToRemoveId = new EventEmitter<string>();


  onCompleteTask(id: string | undefined) {
    this.taskToRemoveId.emit(id);
  }
}
