import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private authService: AuthService) {
  }

  logout() {
    this.authService.logout();
  }

  get isLoggedIn(): boolean {
    const user  =  JSON.parse(localStorage.getItem('user'));
    return user  !==  null;
  }
}
