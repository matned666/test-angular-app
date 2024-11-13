import {Component, computed, Input, input} from '@angular/core';

@Component({
  selector: 'app-user-button',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // avatar = input<string>();
  avatar = input.required<string>(); // input jest generyczny, dlatego musimy dać typ np. string
  name = input.required<string>(); // pamiętać że wywołanie w html jest z () jak sygnału


  // get userImagePath() {
  //   return 'assets/users/' + this.avatar();
  // }

  userImagePath = computed(() => 'assets/users/' + this.avatar())


  onSelectedUserClick() {
    console.log('user clicked: ' + this.name())
  }

}
