import {Component, Input} from '@angular/core';
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

}
