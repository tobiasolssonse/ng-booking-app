import { Injectable } from '@angular/core';
import { Room } from '../shared/room.model';
import { Booking } from '../shared/booking.model';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable()
export class BookingRoomsService {
    constructor(private afs: AngularFirestore ) {
    }
    getRooms() {
      return this.afs.collection('Rooms').snapshotChanges();
    }
    getBookings() {
      return this.afs.collection('Bookings').snapshotChanges();
    }
    updateBooking(book: Booking) {
      return new Promise<any>((resolve, reject) =>{
        this.afs.collection('Bookings')
            .add(book)
            .then(res => {}, err => reject(err));
      });
    }
    removeBooking(id: string) {
        this.afs.doc('Bookings/' + id).delete();
    }

}
