import { Component, OnInit } from '@angular/core';
import {Room} from "./booking-rooms.model";
@Component({
  selector: 'booking-rooms',
  templateUrl: './booking-rooms.component.html',
  styleUrls: ['./booking-rooms.component.css']
})
export class BookingRoomsComponent implements OnInit {
  rooms : Room[] = [
    new Room('Standard double', 'lorem ispum', 'http://www.naasfabriker.se/wp-content/uploads/2014/06/Standardrum.jpg')
  ]
  // 'Standard double',
  // 'Standard twin',
  // 'Superior',
  // 'Deluxe'
  constructor() { }

  ngOnInit() {
  }

}
