import { Component, OnInit } from '@angular/core';
import { MatOptionSelectionChange} from '@angular/material';
import { Room } from './room.model';
import { Booking } from '../shared/booking.model';

import { BookingRoomsService } from './booking-rooms.service';
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
    // this.bookingRoomsService.selectedRoom
    // .subscribe(
    //   (room: Room) => {
    //     if ( this.selectedRoom !== room){
    //       this.selectedRoom = room;
    //       console.log(this.selectedRoom);
    //     }
    //   }
    // );

  }
  onChangeRoom(event: MatOptionSelectionChange, booking: Booking ){
    console.log(event);
    this.bookingRoomsService.updateBooking(booking);
  }
}
