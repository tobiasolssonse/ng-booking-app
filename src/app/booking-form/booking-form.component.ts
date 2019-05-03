import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatOptionSelectionChange} from '@angular/material';

import { Room } from '../shared/room.model';
import { Booking } from '../shared/booking.model';
import { BookingRoomsService } from '../shared/booking-rooms.service';
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  form: FormGroup;
  rooms: Room[];
  selectedRoom: Room;
  booking: Booking;
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
    this.rooms = this.bookingRoomsService.getRooms();
    this.booking = this.bookingRoomsService.getBooking();
    // this.form = new FormGroup({
    //   name : new FormControl(null, Validators.required),
    //   email : new FormControl(null, [Validators.required, Validators.email]),
    //   date : new FormControl(null, Validators.required),
    // });
    console.log(this.booking);
  }
  onChangeRoom(event: MatOptionSelectionChange) {
    this.bookingRoomsService.updateBooking({ room : event} );
  }
  onSubmit() {
    console.log(this.form);
  }
}
