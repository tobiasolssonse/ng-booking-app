import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as moment from 'moment';
@Component({
  selector: 'booking-date',
  templateUrl: './booking-date.component.html',
  styleUrls: ['./booking-date.component.css']
})
export class BookingDateComponent implements OnInit {
  dateFormat : string = 'YYYY-MM-DD';
  checkInDate: string ;
  checkOutDate: string ;
  checkOutMinDate: string;
  NumberOfNights : number;
  minDate = moment(new Date()).format(this.dateFormat);

  constructor() { }
  
  ngOnInit() {

  }
  
  onUpdateCheckInDate(event: Event) {
    this.checkInDate = ( event.target as HTMLInputElement).value;
    // update checkOutMinDate
    this.checkOutMinDate = moment(this.checkInDate).add({days: 1}).format(this.dateFormat);
    if(moment(this.checkOutDate) < moment(this.checkOutMinDate)){
      this.checkOutDate = this.checkOutMinDate;
    }
  }

  onUpdateCheckOutDate(event: Event) {
    this.checkOutDate = ( event.target as HTMLInputElement).value;
    this.NumberOfNights = (this.getNumberOfNights(this.checkInDate,this.checkOutDate));
  }

  private getNumberOfNights(inDate: string, outDate: string){
    const a = moment(outDate);
    const b = moment(inDate);
    return a.diff(b, 'days');
  }
}
