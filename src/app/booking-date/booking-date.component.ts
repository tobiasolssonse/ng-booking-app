import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
// import * as moment from 'moment';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;
@Component({
  selector: 'app-booking-date',
  templateUrl: './booking-date.component.html',
  styleUrls: ['./booking-date.component.css'],
  providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class BookingDateComponent implements OnInit {
  dateFormat = 'YYYY-MM-DD';
  checkInDate: string ;
  checkOutDate: string ;
  checkOutMinDate: string;
  NumberOfNights: number;
  minDate = moment(new Date()).format(this.dateFormat);
  indate = new FormControl();
  outdate = new FormControl();
  constructor() { }

  ngOnInit() {
   
    // this.checkInDate = this.minDate;
    // this.checkOutMinDate = moment(this.minDate).add({days: 1}).format(this.dateFormat);
  }

  onUpdateCheckInDate(event: Event) {
    this.checkInDate = ( event.target as HTMLInputElement).value;
    // checkindate = new FormControl(new Date());
    // update checkOutMinDate
    console.log('checkindate', ( event.target as HTMLInputElement).value);
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
