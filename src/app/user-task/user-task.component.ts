import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {
  @Input({required:true}) id!: string;
  @Input({required:true}) name!: string;

  get userInfo(){
    return 'User ' + this.name + ' has id: ' + this.id;
  }


}
