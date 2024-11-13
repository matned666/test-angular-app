import {Component, EventEmitter, Input, output} from '@angular/core';

@Component({
  selector: 'app-user-button',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  // @Output() select = new EventEmitter();
  select = output<string>();

  get userImagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectedUserClick() {
    this.select.emit(this.id);
  }

}
