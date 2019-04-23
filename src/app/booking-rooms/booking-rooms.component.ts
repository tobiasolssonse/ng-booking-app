import { Component, OnInit } from '@angular/core';
import {Room} from "./booking-rooms.model";
@Component({
  selector: 'booking-rooms',
  templateUrl: './booking-rooms.component.html',
  styleUrls: ['./booking-rooms.component.css']
})
export class BookingRoomsComponent implements OnInit {
  rooms = [
    'Standard double',
    'Standard twin',
    'Superior',
    'Deluxe'
  ]
  constructor() { }

  ngOnInit() {
  }

}
