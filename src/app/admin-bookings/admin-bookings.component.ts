import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BookingRoomsService } from '../shared/booking-rooms.service';
import { Room } from '../shared/room.model';
import { Booking } from '../shared/booking.model';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css'],
})
export class AdminBookingsComponent implements OnInit {
  booking: Booking;
  items: Observable<any[]>;
  displayedColumns: string[] = ['checkInDate', 'checkOutDate', 'room', 'personName', 'personMail'];
  dataSource: MatTableDataSource<Booking>;
  constructor(private bookingRoomsService: BookingRoomsService, db: AngularFirestore ) {
    this.dataSource = new MatTableDataSource(bookingRoomsService.getBookings());
    this.items = db.collection('Bookings').valueChanges();
  }
  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
