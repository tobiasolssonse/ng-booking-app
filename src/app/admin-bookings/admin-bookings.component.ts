import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BookingRoomsService } from '../shared/booking-rooms.service';
import { Room } from '../shared/room.model';
import { Booking } from '../shared/booking.model';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css'],
})
export class AdminBookingsComponent implements OnInit {
  booking: Booking;
  displayedColumns: string[] = ['checkInDate', 'checkOutDate', 'room', 'personName', 'personMail'];
  dataSource: MatTableDataSource<Booking>;
  constructor(private bookingRoomsService: BookingRoomsService) {
    this.dataSource = new MatTableDataSource(bookingRoomsService.getBookings());

  }
  ngOnInit() {
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
