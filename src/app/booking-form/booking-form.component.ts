import { Component, OnInit, ViewChild } from '@angular/core';
import { MatOptionSelectionChange} from '@angular/material';
import { BookingRoomsService } from '../shared/booking-rooms.service';
import { Room } from '../shared/room.model';
import { NgForm } from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { Booking } from '../shared/booking.model';
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  @ViewChild('f') bookingForm: NgForm;
  rooms: Room[];
  today = new Date();
  dateIn: any = new Date();
  dateOut = new Date(this.dateIn - (-24 * 60 * 60 * 1000));
  activeRoom = 'Standard Twin';
  bookingConfirmed = false;
  confirmedBooking: object;
  bookingID: string;
  constructor(private bookingRoomsService: BookingRoomsService) {
  }
  ngOnInit() {
    this.bookingRoomsService.getRooms().subscribe(actionArray => {
      this.rooms = actionArray.map(item => {
        return {
          ...item.payload.doc.data()
        } as Room;
      });
    });
  }
  onChangeRoom(event: any) {
    this.activeRoom = event;
  }
  addEvent(event: MatDatepickerInputEvent<any>) {
    this.dateIn = event.value.begin._d;
    this.dateOut = event.value.end._d;
  }
  onSubmit() {
    this.bookingRoomsService.updateBooking({
      room: this.activeRoom,
      checkInDate: this.dateIn,
      checkOutDate: this.dateOut,
      personName: this.bookingForm.value.name,
      personMail: this.bookingForm.value.email,
    });
    setTimeout (() => {
      this.bookingConfirmed = true;
      const tempid = this.bookingRoomsService.BookingId;
      this.bookingID = tempid;
      this.bookingRoomsService.getBooking(tempid).subscribe(thebooking => {
        this.confirmedBooking  = thebooking.data() as Booking;
      });
    }, 500);

  }
  backToBooking() {
    this.bookingConfirmed = false;
    this.bookingID = '';
  }
}
