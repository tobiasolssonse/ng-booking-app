import { Injectable } from '@angular/core';
import { Room } from '../shared/room.model';
import { Booking } from '../shared/booking.model';
import { AngularFirestore } from '@angular/fire/firestore';

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
      {checkInDate: new Date() , checkOutDate: new Date(),
        room: 'Standard Double', personName: 'Spindelmannen', personMail: 'spidey@tobiasolsson.se'},
      {checkInDate: new Date() , checkOutDate: new Date(), room: 'Superior', personName: 'Robin', personMail: 'robin@tobiasolsson.se'},
      {checkInDate: new Date() , checkOutDate: new Date(), room: 'Deluxe', personName: 'Hulken', personMail: 'hulken@tobiasolsson.se'},
      {checkInDate: new Date() ,
        checkOutDate: new Date(), room: 'Standard Double', personName: 'Tarzan', personMail: 'tarzam@tobiasolsson.se'},
      {checkInDate: new Date() ,
        checkOutDate: new Date(), room: 'Superior', personName: 'Läderlappen', personMail: 'batboy@tobiasolsson.se'},
    ];
    inDate = new Date();
    outDate = new Date();
    booking: Booking;
    constructor( private firestore: AngularFirestore ){

    }
    getRooms() {
      return this.ROOMS.slice();
    }
    getBookings() {
      // console.log(this.firestore.collection('Bookings').snapshotChanges());
      return this.BOOKINGS;
    }
    getCoffeeOrders() { 
      return this.firestore.collection('Bookings').snapshotChanges();
    }
    getBooking() {
      return this.booking;
    }
    updateBooking(book: Booking) {
      // this.BOOKINGS.push(book);
      return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection('Bookings')
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
