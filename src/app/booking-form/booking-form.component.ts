import { Component, OnInit, ViewChild } from '@angular/core';
import { MatOptionSelectionChange} from '@angular/material';

import { BookingRoomsService } from '../shared/booking-rooms.service';
import { Room } from '../shared/room.model';
import { Booking } from '../shared/booking.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  @ViewChild('f') bookingForm: NgForm;
  rooms: Room[];
  booking: Booking;
  defaultRoom = 'Standard double';
  constructor(private bookingRoomsService: BookingRoomsService) {
  }
  ngOnInit() {
    this.rooms = this.bookingRoomsService.getRooms();
    this.booking = this.bookingRoomsService.getBooking();
  }
  onChangeRoom(event: MatOptionSelectionChange) {
    // this.bookingRoomsService.updateBooking({ room: event} );
  }
  onSubmit() {
    this.bookingRoomsService.updateBooking({
      room: this.bookingForm.value.room,
      dates: this.bookingForm.value.dates,
      email: this.bookingForm.value.email,
      name: this.bookingForm.value.name,
    });
    // console.log(this.bookingRoomsService.getBooking());
  }
}
