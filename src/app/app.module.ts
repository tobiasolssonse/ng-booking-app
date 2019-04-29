import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { BookingDateComponent } from './booking-date/booking-date.component';
import { BookingRoomsComponent } from './booking-rooms/booking-rooms.component';
import { RoomComponent } from './booking-rooms/room/room.component';
import { BookingRoomsService } from './booking-rooms/booking-rooms.service';
import { BookingFormComponent } from './booking-form/booking-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingDateComponent,
    BookingRoomsComponent,
    RoomComponent,
    BookingFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    BookingRoomsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
