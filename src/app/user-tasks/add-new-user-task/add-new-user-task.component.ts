import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskModel} from '../user-task/task.model';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-add-new-user-task',
  templateUrl: './add-new-user-task.component.html',
  styleUrls: ['./add-new-user-task.component.css'],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class AddNewUserTaskComponent {
  @Input({required:true}) userId?: string;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<TaskModel>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancelButtonClick() {
    this.close.emit();
  }

  onSaveButtonClick() {
    const newTask : TaskModel = {
      id: '0',
      userId: this.userId ?? '',
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    };

    console.log(newTask);
    this.save.emit(newTask);
  }


}
