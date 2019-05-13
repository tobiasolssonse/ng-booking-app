import { Component, OnInit, ViewChild } from '@angular/core';
import { MatOptionSelectionChange} from '@angular/material';
import { BookingRoomsService } from '../shared/booking-rooms.service';
import { Room } from '../shared/room.model';
import { Booking } from '../shared/booking.model';
import { NgForm } from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker'
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  @ViewChild('f') bookingForm: NgForm;
  rooms: Room[];
  dateIn: any;
  dateOut: any;
  dates = new Date(2018, 7, 5);
  defaultRoom = 'Standard double';
  constructor(private bookingRoomsService: BookingRoomsService) {
  }
  ngOnInit() {
    this.bookingRoomsService.getRooms().subscribe(actionArray =>{
      this.rooms = actionArray.map(item => {
        return {
          ...item.payload.doc.data()
        } as Room;
      });
    });
  }
  onChangeRoom(event: MatOptionSelectionChange) {
    // växla bild senare
  }
  addEvent(event: MatDatepickerInputEvent<any>) {
    this.dateIn = event.value.begin._d;
    this.dateOut = event.value.end._d;
  
  }
  onSubmit() {
    this.bookingRoomsService.updateBooking({
      room: this.bookingForm.value.room,
      checkInDate: this.bookingForm.value.dates.begin._d,
      checkOutDate: this.bookingForm.value.dates.end._d,
      personName: this.bookingForm.value.name,
      personMail: this.bookingForm.value.email,
    });
  }
}
