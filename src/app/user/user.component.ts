import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartComponent } from '../shared/cart/cart.component';

// using type
// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

//using interface
interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) seleted!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return '/assets/users/' + this.user.avatar;
  }
  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
