import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-task',
  standalone: true,
  imports: [],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css'
})
export class UserTaskComponent {
  @Input() id: string | undefined; //  '| undefined' to to samo co ? jak przy name - '|' to 'lub'
  @Input() name?: string;

  get userInfo(){
    // 'If' tworzymy jak w javascript albo java, name == null -> to samo co this.name === undefined || this.name === null ,
    // ?? Jeszcze bardziej skraca warunek. Tu sprawdzamy, czy id lub name nie są undefined, lub null
    if ((this.id ?? this.name) == null) {
      return 'Undefined user !!!'
    }
    return 'User ' + this.name + ' has id: ' + this.id;
  }


}
