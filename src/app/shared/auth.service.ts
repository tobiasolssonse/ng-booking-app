import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from  '@angular/fire/auth';
import { User } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export  class AuthService {
  user: User;
  public error: string;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  isAuthenticated(){
    return this.user;
  }

  async login(email: string, password: string) {
    try {
        await this.afAuth.auth.signInWithEmailAndPassword(email, password)
        this.router.navigate(['/bookings']);
    } catch (e) {
        this.error =  e.message;
    }
  }

  async logout() {
      await this.afAuth.auth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['/']);
  }
}
