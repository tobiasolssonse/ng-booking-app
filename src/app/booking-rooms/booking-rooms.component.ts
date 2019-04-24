import { Component, OnInit, Output } from '@angular/core';
import {Room} from './room.model';
@Component({
  selector: 'app-booking-rooms',
  templateUrl: './booking-rooms.component.html',
  styleUrls: ['./booking-rooms.component.css']
})
export class BookingRoomsComponent implements OnInit {
   rooms: Room[] = [
    new Room(
      `Standard double`,
      `Våra standardrum är ljusa och ombonade tack vare
      vackra material och påkostad inredning. Rummen är luftiga och
      ljusa med en generös takhöjd på fyra meter och stora spröjsade fönster upp till tak.`,
      'http://www.naasfabriker.se/wp-content/uploads/2014/06/Standardrum.jpg',
      true),
    new Room(
      'Standard twin',
      `Våra twinrum har två separata sängar och har samma vackra material och
      ombonade inredning som våra standardrum. Rummen är luftiga och ljusa med
      vackra spröjsade fönster.`,
      'http://www.naasfabriker.se/wp-content/uploads/2014/06/twin-naas-fabriker.jpg',
      false),
    new Room(
      'Superior',
      `Våra superiorrum ligger på våning tre och fyra, en del med utsikt över sjön Sävelången.
      Färgerna i rummen går i ljusa toner, vilket ger en rymlig och luxuös känsla som
      förstärks av rummens härliga fönster.
      I två av rummen finns runda sängar.`,
      'http://www.naasfabriker.se/wp-content/uploads/2014/06/NF-superiorrum.jpg)',
      false),
    new Room(
      'Deluxe',
      `Våra deluxe hörnrum har vacker rymd och är personligt inredda. Rummen är på hela 45 kvm`,
      'http://www.naasfabriker.se/wp-content/uploads/2014/06/Deluxe-hornrum.jpg',
      false)
  ];

  constructor() { }
  ngOnInit() {

  }
  onRoomToggle(eventArgs) {

    console.log(this.rooms);
    console.log('BOOKING-ROOMS.COMPONENT: onRoomToggle()', eventArgs);
  }
}
