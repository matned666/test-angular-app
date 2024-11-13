import { Component } from '@angular/core';
import {TestHeader1Component} from './header/testHeader1.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from './user/dummy-users';
import {UserTaskComponent} from './user-task/user-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestHeader1Component, UserComponent, UserTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app-1';
  users = DUMMY_USERS;
  actualUser = this.users[0];

  onSelectUser(user: { name: string; id: string; avatar: string }) {
    this.actualUser = user;
    console.log('user id: ' + this.actualUser.id);
  }
}
