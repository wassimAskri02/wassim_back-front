import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Adjust the path as necessary

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.signIn(this.username, this.password).subscribe(
      data => {
        // Handle the response here. Example: store the token, navigate to another page
      },
      error => {
        // Handle errors here. Example: show an error message
      }
    );
  }
}
