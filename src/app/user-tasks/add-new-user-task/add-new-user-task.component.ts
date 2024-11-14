import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {type NewTaskData} from '../user-task/task.model';


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
  @Output() save = new EventEmitter<NewTaskData>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  onCancelButtonClick() {
    this.close.emit();
  }

  onSaveButtonClick() {
    const newTask = {
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    };
    this.save.emit(newTask);
  }


}
