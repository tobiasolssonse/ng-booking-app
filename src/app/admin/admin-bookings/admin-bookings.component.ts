import { Component, OnInit} from '@angular/core';
import { BookingRoomsService } from '../../shared/booking-rooms.service';
import { Booking } from '../../shared/booking.model';
@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.scss'],
})
export class AdminBookingsComponent implements OnInit {
  bookings: Booking[];
  constructor(private bookingRoomsService: BookingRoomsService ) {}
  ngOnInit() {
    this.bookingRoomsService.getBookings().subscribe(actionArray => {
      this.bookings = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Booking;
      });
    });
  }
  delete(id: string) {
    if (confirm('Delete booking?')) {
      this.bookingRoomsService.removeBooking(id);
    }
  }
  checkin(id: string, checkedin: boolean) {
    this.bookingRoomsService.checkinBooking(id, checkedin);
  }
  applyFilter(filterValue: string) {
    console.log(filterValue.trim().toLowerCase());
    console.log(this.bookings);
  }
}
