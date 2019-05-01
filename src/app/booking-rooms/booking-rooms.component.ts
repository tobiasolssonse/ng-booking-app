import { Component, OnInit } from '@angular/core';
import { MatOptionSelectionChange} from '@angular/material';

import { Room } from '../shared/room.model';
import { Booking } from '../shared/booking.model';
import { BookingRoomsService } from '../shared/booking-rooms.service';

@Component({
  selector: 'app-booking-rooms',
  templateUrl: './booking-rooms.component.html',
  styleUrls: ['./booking-rooms.component.css'],
})

export class BookingRoomsComponent implements OnInit {
  rooms: Room[];
  selectedRoom: Room;
  booking: Booking;

  constructor(private bookingRoomsService: BookingRoomsService ) { }

  ngOnInit() {
    this.rooms = this.bookingRoomsService.getRooms();
    this.booking = this.bookingRoomsService.getBooking();
    console.log(this.booking);

  }
  onChangeRoom(event: MatOptionSelectionChange) {
    // console.log(event);
    this.bookingRoomsService.updateBooking({ room : event} );
  }
}
