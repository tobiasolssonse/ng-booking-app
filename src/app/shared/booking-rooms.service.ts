import { Injectable } from '@angular/core';
import { Room } from '../shared/room.model';
import { Booking } from '../shared/booking.model';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class BookingRoomsService {
    constructor(private afs: AngularFirestore ) {
    }
    getRooms() {
      return this.afs.collection<Room>('Rooms').snapshotChanges();
    }

    getBookings() {
      return this.afs.collection<Booking>('Bookings', ref => ref.orderBy('checkInDate')).snapshotChanges();
    }

    updateBooking(book: Booking) {
      return new Promise<any>((resolve, reject) => {
        this.afs.collection('Bookings')
            .add(book)
            .then(res => {}, err => reject(err));
      });
    }
    removeBooking(id: string) {
        this.afs.doc('Bookings/' + id).delete();
    }
    checkinBooking(id: string, checkedin: boolean) {
      checkedin = !checkedin;
      this.afs.doc('Bookings/' + id).update({checkedin: checkedin});
      console.log('checkin', id);
    }
    removeRoom(id: string) {
      this.afs.doc('Rooms/' + id).delete();
    }
    updateRoom(room: Room) {
      this.afs.doc('Rooms/' + room.id).update(room);
    }
    addRoom(room: Room) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('Rooms')
          .add(room)
          .then(res => {}, err => reject(err));
    });
    
  }

}
