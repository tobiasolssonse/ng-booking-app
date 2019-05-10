import { Injectable } from '@angular/core';
import { Room } from '../shared/room.model';
import { Booking } from '../shared/booking.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable()
export class BookingRoomsService {
    private BOOKINGS: Booking[] = [
      new Booking('Standard Double', 'Tue Feb 04 2019 12:05:22 GMT+0530 (IST)',
       'Tue Feb 05 2019 12:05:22 GMT+0530 (IST)',  'Spindelmannen', 'spidey@tobiasolsson.se'),
    ];
    constructor(private afs: AngularFirestore ) {
      console.log(afs.collection('Bookings').snapshotChanges());

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
