import {Component} from '@angular/core';
import {DUMMY_USERS} from './user/dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app-1';
  users = DUMMY_USERS;
  actualUserId?: string;


  get selectedUser() {
    return this.users.find((user) => user.id === this.actualUserId);
  }

  onSelectUser(id: string) {
    this.actualUserId = id;
  }
}
