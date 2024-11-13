import { Component, signal, computed } from '@angular/core';
import {DUMMY_USERS} from './dummy-users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user-button',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = signal(DUMMY_USERS[randomIndex]);
  userImagePath = computed(() => 'assets/users/' + this.user().avatar)
  clickedTimes = 0;

  // get userImagePath() {
  //   return 'assets/users/' + this.user().avatar
  // }

  onSelectedUserClick() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.user.set(DUMMY_USERS[randomIndex]);
    this.clickedTimes++;
  }


}
