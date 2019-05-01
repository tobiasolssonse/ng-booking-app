import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

import { Room } from '../shared/room.model';
import { Booking } from '../shared/booking.model';

@Injectable()
export class BookingRoomsService {
    private ROOMS: Room[] = [
      new Room(
          `Standard double`,
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
    ];

    inDate = new Date();
    outDate = new Date();
    booking = new Booking(null, this.inDate , this.outDate, null, null);

    getRooms(){
        return this.ROOMS.slice();
    }
    getBooking(){
      return this.booking;
    }
    updateBooking(book){
      if (book.room){
        this.booking.room = book.room;
      }
      console.log(this.booking);
    }
     getNumberOfNights(inDate: string, outDate: string) {
      // const a = moment(outDate); import moment
      // const b = moment(inDate);
      // return a.diff(b, 'days');
    }
}
