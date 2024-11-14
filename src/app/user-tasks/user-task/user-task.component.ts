import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskModel} from './task.model';
import {CardComponent} from '../../shared/card/card.component';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
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
