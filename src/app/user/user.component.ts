import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-button',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  get userImagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectedUserClick() {
    console.log('user clicked: ' + this.name)
  }

}
