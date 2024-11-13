import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user-button',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input() id?: string;
  @Input() avatar?: string;
  @Input() name?: string;
  @Output() select = new EventEmitter<string>();

  get userImagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectedUserClick() {
    this.select.emit(this.id);
  }

}
