import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskModel} from './task.model';
import {CardComponent} from '../../shared/card/card.component';

@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {
  @Input({required: true}) userTask!: TaskModel;
  @Output() taskToRemoveId = new EventEmitter<string>();


  onCompleteTask() {
    this.taskToRemoveId.emit(this.userTask.id);
  }
}
