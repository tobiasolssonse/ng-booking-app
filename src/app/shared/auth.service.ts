import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(private afs: AngularFirestore ) {
    }
    login(email: string, password: string) {
     console.log('fh');
    }
}
