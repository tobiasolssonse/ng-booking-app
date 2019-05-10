import { Injectable } from '@angular/core';
import { Room } from '../shared/room.model';
import { Booking } from '../shared/booking.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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
    private BOOKINGS: Booking[] = [
      new Booking('Standard Double', 'Tue Feb 04 2019 12:05:22 GMT+0530 (IST)',
       'Tue Feb 05 2019 12:05:22 GMT+0530 (IST)',  'Spindelmannen', 'spidey@tobiasolsson.se'),
    ];
    constructor(private afs: AngularFirestore ) {
      console.log(afs.collection('Bookings').valueChanges());
      console.log(afs.collection('Rooms'));
    }
    getRooms() {
      return this.afs.collection('Rooms').snapshotChanges();
      // return this.ROOMS.slice();
    }
    getBookings() {
      return this.BOOKINGS;
    }
    updateBooking(book: Booking) {
      return new Promise<any>((resolve, reject) =>{
        this.afs.collection('Bookings')
            .add(book)
            .then(res => {}, err => reject(err));
      });
    }
     getNumberOfNights(inDate: string, outDate: string) {
      // const a = moment(outDate); import moment
      // const b = moment(inDate);
      // return a.diff(b, 'days');
    }
}
