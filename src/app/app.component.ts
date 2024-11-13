import { Component } from '@angular/core';
import {TestHeader1Component} from './header/testHeader1.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from './user/dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestHeader1Component, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-app-1';
  users = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log('user id: ' + id);
  }
}
