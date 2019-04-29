import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import * as moment from 'moment';
@Component({
  selector: 'app-booking-date',
  templateUrl: './booking-date.component.html',
  styleUrls: ['./booking-date.component.css']
})
export class BookingDateComponent implements OnInit {
  dateFormat = 'YYYY-MM-DD';
  checkInDate: string ;
  checkOutDate: string ;
  checkOutMinDate: string;
  NumberOfNights: number;
  minDate = moment(new Date()).format(this.dateFormat);
  date = new FormControl(new Date());

  constructor() { }

  ngOnInit() {
    this.checkInDate = this.minDate;
    this.checkOutMinDate = moment(this.minDate).add({days: 1}).format(this.dateFormat);
  }

  onUpdateCheckInDate(event: Event) {
    this.checkInDate = ( event.target as HTMLInputElement).value;
    // checkindate = new FormControl(new Date());
    // update checkOutMinDate
    console.log('checkindate', event);
    this.checkOutMinDate = moment(this.checkInDate).add({days: 1}).format(this.dateFormat);
    if (moment(this.checkOutDate) < moment(this.checkOutMinDate)) {
      this.checkOutDate = this.checkOutMinDate;
    }
  }

  onUpdateCheckOutDate(event: Event) {
    this.checkOutDate = ( event.target as HTMLInputElement).value;
    this.NumberOfNights = (this.getNumberOfNights(this.checkInDate, this.checkOutDate));
  }

  private getNumberOfNights(inDate: string, outDate: string) {
    const a = moment(outDate);
    const b = moment(inDate);
    return a.diff(b, 'days');
  }
}
