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

  login() {
    console.log('login');
    // this.authService.login('tobias@tobiasolsson.se', 'qwerty');
  }

}
