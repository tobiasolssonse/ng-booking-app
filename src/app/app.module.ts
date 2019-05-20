import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Routes, RouterModule } from '@angular/router';
// import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
// MATERIAL
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, SatDatepickerModule } from 'saturn-datepicker';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
// APP
import { AppComponent } from './app.component';
import { BookingRoomsService } from './shared/booking-rooms.service';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { AdminBookingsComponent } from './admin/admin-bookings/admin-bookings.component';
import { AdminRoomComponent } from './admin/admin-room/admin-room.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthGuard } from './shared/auth-guard.service';
import { StartpageComponent } from './startpage/startpage.component';
export const firebaseConfig = {
  apiKey: 'AIzaSyDxY4dKVfCOSCgsjmbKzeUlX0idSwkyI1A',
  authDomain: 'ng-booking-app-9b2a1.firebaseapp.com',
  databaseURL: 'https://ng-booking-app-9b2a1.firebaseio.com',
  projectId: 'ng-booking-app-9b2a1',
  storageBucket: 'ng-booking-app-9b2a1.appspot.com',
  messagingSenderId: '230619374613',
  appId: '1:230619374613:web:758917ba69bed4fa'
};

const appRoutes: Routes = [
  { path: '', component: StartpageComponent },
  { path: 'book', component: BookingFormComponent },
  { path: 'bookings', canActivate:[AuthGuard], component: AdminBookingsComponent },
  { path: 'rooms', canActivate:[AuthGuard], component: AdminRoomComponent },
  { path: 'login', component: LoginComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    BookingFormComponent,
    AdminBookingsComponent,
    AdminRoomComponent,
    LoginComponent,
    StartpageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes),
    SatDatepickerModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    // AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    BookingRoomsService,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
