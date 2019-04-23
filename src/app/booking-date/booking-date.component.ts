import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'booking-date',
  templateUrl: './booking-date.component.html',
  styleUrls: ['./booking-date.component.css']
})


export class BookingDateComponent implements OnInit {
  const now:date  = Date.now();
  public todaysDate: string =  "2019-04-23";  
  checkInDate: date;
  checkOutDate: date;

  constructor() { }
  
  ngOnInit() {
   console.log(this.now);
  }
  
  onUpdateCheckInDate(event: event){
    this.checkInDate = (<HTMLInputElement>event.target).value;
    console.log("check in date changed", this.checkInDate);
  }
  
  onUpdateCheckOutDate(event: event){
    this.checkOutDate = (<HTMLInputElement>event.target).value;
    console.log("check out date changed", this.checkOutDate);
  }
}
