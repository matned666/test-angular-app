import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
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

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  onCancelButtonClick() {
    this.close.emit();
  }

  onSaveButtonClick() {
    const newTask : TaskModel = {
      id: '0',
      userId: this.userId ?? '',
      summary: this.enteredSummary(),
      title: this.enteredTitle(),
      dueDate: this.enteredDate()
    };

    console.log(newTask);
    this.save.emit(newTask);
  }


}
