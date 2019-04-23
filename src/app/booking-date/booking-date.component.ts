import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'booking-date',
  templateUrl: './booking-date.component.html',
  styleUrls: ['./booking-date.component.css']
})
export class BookingDateComponent implements OnInit {
  dateFormat : string = 'YYYY-MM-DD'
  checkInDate: string ;
  checkOutDate: string ;
  checkOutMinDate: string;
  minDate = moment(new Date()).format(this.dateFormat);

  constructor() { }
  
  ngOnInit() {
    var a = moment('2016-06-06');//now
var b = moment('2016-05-06');
    console.log(a.diff(b, 'days')) // 31

  }
  
  onUpdateCheckInDate(event: Event) {
    this.checkInDate = ( event.target as HTMLInputElement).value;
    this.checkOutMinDate = moment(this.checkInDate).add({days: 1}).format(this.dateFormat);
    console.log(this.countNights(this.checkInDate,this.checkOutDate));
  }
  onUpdateCheckOutDate(event: Event) {
    this.checkOutDate = ( event.target as HTMLInputElement).value;
    console.log(this.countNights(this.checkInDate,this.checkOutDate));
  }
  private countNights(inDate: string, outDate: string){
    const a = moment(outDate);
    const b = moment(inDate);
    return a.diff(b, 'days');
  }
}
