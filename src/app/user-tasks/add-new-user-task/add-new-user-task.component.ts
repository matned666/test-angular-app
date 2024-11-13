import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskModel} from '../user-task/task.model';


@Component({
  selector: 'app-add-new-user-task',
  templateUrl: './add-new-user-task.component.html',
  styleUrls: ['./add-new-user-task.component.css'],
  standalone: true
})
export class AddNewUserTaskComponent {
  @Input({required:true}) userId?: string;
  @Output() close = new EventEmitter();
  @Output() save = new EventEmitter<TaskModel>();

  onCancelButtonClick() {
    this.close.emit();
  }

  onSaveButtonClick(title: string, summary: string, dueDate: string) {

    // tworzenie aktualnej daty w typescript
    //
    // const today = new Date();
    // const year = today.getFullYear();
    // const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Dodaj 1, ponieważ miesiące są indeksowane od 0
    // const day = today.getDate().toString().padStart(2, '0');
    // const dueDate = `${year}-${month}-${day}`;

    const newTask : TaskModel = {
      id: '0',
      userId: this.userId ?? '',
      title: title,
      summary: summary,
      dueDate: dueDate
    };

    console.log(newTask);
    this.save.emit(newTask);
  }


}
