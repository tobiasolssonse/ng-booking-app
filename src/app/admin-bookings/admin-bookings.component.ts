import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { BookingRoomsService } from '../shared/booking-rooms.service';
import { Room } from '../shared/room.model';
import { Booking } from '../shared/booking.model';


// export interface Booking {
//   checkInDate: string;
//   checkOutDate: string;
//   room: string;
//   personName: string;
//   personMail: string;
// }

const ELEMENT_DATA: Booking[] = [
  {checkInDate: new Date() , checkOutDate: new Date(),
    room: 'Standard Double', personName: 'Spindelmannen', personMail: 'spidey@tobiasolsson.se'},
  {checkInDate: new Date() , checkOutDate: new Date(), room: 'Superior', personName: 'Robin', personMail: 'robin@tobiasolsson.se'},
  {checkInDate: new Date() , checkOutDate: new Date(), room: 'Deluxe', personName: 'Hulken', personMail: 'hulken@tobiasolsson.se'},
  {checkInDate: new Date() , checkOutDate: new Date(), room: 'Standard Double', personName: 'Tarzan', personMail: 'tarzam@tobiasolsson.se'},
  {checkInDate: new Date() , checkOutDate: new Date(), room: 'Superior', personName: 'Läderlappen', personMail: 'batboy@tobiasolsson.se'},
];


@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css']
})
export class AdminBookingsComponent implements OnInit {
  booking: Booking;
  displayedColumns: string[] = ['checkInDate', 'checkOutDate', 'room', 'personName', 'personMail'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit() {
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
