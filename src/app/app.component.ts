import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = new User();
  users = [];
  confirm_pw: String = '';

  onSubmit() {
    // this.users.push(this.user);

    console.log('Password', this.user.password);
    console.log('confirm', this.confirm_pw);
    console.log('everything valid?' );
    this.user = new User();
  }
}
