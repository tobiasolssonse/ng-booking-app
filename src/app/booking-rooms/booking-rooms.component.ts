import { Component, OnInit, Output } from '@angular/core';
import {Room} from './room.model';
import {ROOMS} from './mock-rooms';
@Component({
  selector: 'app-booking-rooms',
  templateUrl: './booking-rooms.component.html',
  styleUrls: ['./booking-rooms.component.css']
})

export class BookingRoomsComponent implements OnInit {
  rooms = ROOMS;
  selectedRoom: Room;

  constructor() { }

  ngOnInit() {
  }

  onRoomToggle(eventArgs) {
      console.log('BOOKING-ROOMS.COMPONENT: onRoomToggle()', eventArgs);
  }

  onSelect(room: Room): void {
      this.selectedRoom = room;
  }
}
