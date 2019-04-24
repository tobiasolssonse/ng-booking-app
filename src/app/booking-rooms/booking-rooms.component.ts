import { Component, OnInit } from '@angular/core';
import {Room} from "./room.model";
@Component({
  selector: 'booking-rooms',
  templateUrl: './booking-rooms.component.html',
  styleUrls: ['./booking-rooms.component.css']
}) 
export class BookingRoomsComponent implements OnInit {
   rooms : Room[] = [
    new Room(
      'Standard double',
      `Våra standardrum är ljusa och ombonade tack vare 
      vackra material och påkostad inredning. Rummen är luftiga och
      ljusa med en generös takhöjd på fyra meter och stora spröjsade fönster upp till tak.`,
      'http://www.naasfabriker.se/wp-content/uploads/2014/06/Standardrum.jpg'),
    new Room(
      'Standard twin',
      `Våra twinrum har två separata sängar och har samma vackra material och 
      ombonade inredning som våra standardrum. Rummen är luftiga och ljusa med 
      vackra spröjsade fönster.`,
      'http://www.naasfabriker.se/wp-content/uploads/2014/06/twin-naas-fabriker.jpg'),
    new Room(
      'Superior',
      `Våra superiorrum ligger på våning tre och fyra, en del med utsikt över sjön Sävelången. 
      Färgerna i rummen går i ljusa toner, vilket ger en rymlig och luxuös känsla som 
      förstärks av rummens härliga fönster. 
      I två av rummen finns runda sängar.`,
      'http://www.naasfabriker.se/wp-content/uploads/2014/06/NF-superiorrum.jpg)'),
    new Room(
      'Deluxe',
      `Våra deluxe hörnrum har vacker rymd och är personligt inredda. Rummen är på hela 45 kvm`,
      'http://www.naasfabriker.se/wp-content/uploads/2014/06/Deluxe-hornrum.jpg')
  ]
 
  constructor() { }
  ngOnInit() {
    console.log("booking-rooms-comp");
  }
  onRoomToggle() {
    console.log('BOOKING-ROOMS.COMPONENT: onRoomToggle()');
  }
}
