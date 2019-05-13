import { Component, OnInit} from '@angular/core';
import { BookingRoomsService } from '../shared/booking-rooms.service';
import { Booking } from '../shared/booking.model';
@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.scss'],
})
export class AdminBookingsComponent implements OnInit {
  bookings: Booking[];
  constructor(private bookingRoomsService: BookingRoomsService ) {
  }
  ngOnInit() {
    this.bookingRoomsService.getBookings().subscribe(actionArray => {
      this.bookings = actionArray.map(item => {
        return {
          ...item.payload.doc.data()
        } as Booking;
      });
    });
  }
}
