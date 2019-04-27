import { Component, OnInit } from '@angular/core';
import {Room} from './room.model';
import { BookingRoomsService } from './booking-rooms.service';
@Component({
  selector: 'app-booking-rooms',
  templateUrl: './booking-rooms.component.html',
  styleUrls: ['./booking-rooms.component.css'],
})

export class BookingRoomsComponent implements OnInit {
  rooms: Room[];
  selectedRoom: Room;

  constructor(private bookingRoomsService: BookingRoomsService ) { }

  ngOnInit() {
    this.rooms = this.bookingRoomsService.getRooms();
    this.bookingRoomsService.selectedRoom
    .subscribe(
      (room: Room) => {
        if ( this.selectedRoom !== room){
          this.selectedRoom = room;
          console.log(this.selectedRoom);
        }
      }
    );
  }

}
