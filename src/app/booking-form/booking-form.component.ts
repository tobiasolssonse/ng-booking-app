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
    // växla bild senare
  }
  onSubmit() {
    this.bookingRoomsService.updateBooking({
      room: this.bookingForm.value.room,
      checkInDate: this.bookingForm.value.dates.begin._i,
      checkOutDate: this.bookingForm.value.dates.end._i,
      personName: this.bookingForm.value.name,
      personMail: this.bookingForm.value.email,
    });
    // console.log(this.booking = this.bookingRoomsService.getBooking());
  }
}
