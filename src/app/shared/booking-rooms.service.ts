import { Injectable } from '@angular/core';
import { Room } from '../shared/room.model';
import { Booking } from '../shared/booking.model';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable()
export class BookingRoomsService {
    constructor(private afs: AngularFirestore ) {
      // console.log(afs.collection('Bookings').snapshotChanges());
    }
    getRooms() {
      return this.afs.collection('Rooms').snapshotChanges();
      // return this.ROOMS.slice();
    }
    getBookings() {
      return this.afs.collection('Bookings').snapshotChanges();
      // return this.BOOKINGS;
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
