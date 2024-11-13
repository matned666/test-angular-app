import {Component} from '@angular/core';
import {TestHeader1Component} from './header/testHeader1.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from './user/dummy-users';
import {UserTasksComponent} from './user-tasks/user-tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestHeader1Component, UserComponent, UserTasksComponent],
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
