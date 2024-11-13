import {Component, EventEmitter, Input, Output} from '@angular/core';

type User = {
  id : string;
  avatar: string;
  name: string;
};

@Component({
  selector: 'app-user-button',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter<string>();

  get userImagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUserClick() {
    this.select.emit(this.user.id);
  }

}
