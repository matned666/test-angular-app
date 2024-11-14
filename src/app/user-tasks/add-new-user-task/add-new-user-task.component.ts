import {Component, EventEmitter, inject, Input, Output, signal} from '@angular/core'; // inject jest do drugiego podejścia wstrzykiwania objektu
import {FormsModule} from '@angular/forms';
import {UserTasksService} from '../user-tasks.service';


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
  @Input({required:true}) userId!: string;
  @Output() close = new EventEmitter<void>();

  constructor(private userTaskService: UserTasksService) {}
  // inne podejście:
  // private userTaskService = inject(UserTasksService);

  // ----> chatGPT pisze że w wiekszości przypadków konstruktor,
  // w funkcjach stand-alone -> inject

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
    this.userTaskService.addTask(this.userId, newTask)
    this.close.emit();
  }


}
