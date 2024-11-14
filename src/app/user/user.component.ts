import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserModel} from './user.model';
import {CardComponent} from '../shared/card/card.component';

@Component({
  selector: 'app-user-button',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) user!: UserModel;
  @Input({required:true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get userImagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUserClick() {
    this.select.emit(this.user.id);
  }

}
