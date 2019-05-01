import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
// import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
// import * as _moment from 'moment';

import { Booking } from '../shared/booking.model';
import { BookingRoomsService } from '../shared/booking-rooms.service';

// const moment = _moment;
@Component({
  selector: 'app-booking-date',
  templateUrl: './booking-date.component.html',
  styleUrls: ['./booking-date.component.css'],
  providers: [
   
  ],
})

export class BookingDateComponent implements OnInit {
  booking: Booking;
  form: FormGroup;


  constructor(private bookingRoomsService: BookingRoomsService, fb: FormBuilder) {
    this.form = fb.group({
      date: [
        {
          begin: bookingRoomsService.inDate,
          end: bookingRoomsService.inDate
        }
      ]
    });
  }

  ngOnInit() {

  }
  // onChangeRoom(event) {
  //   console.log(event);
  //   // this.bookingRoomsService.updateBooking({ room : event} );
  // }

 
}
