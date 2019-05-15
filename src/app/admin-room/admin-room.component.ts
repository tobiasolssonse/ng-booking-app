import { Component, OnInit } from '@angular/core';


import { Room } from '../shared/room.model';
import { BookingRoomsService } from '../shared/booking-rooms.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-admin-room',
  templateUrl: './admin-room.component.html',
  styleUrls: ['./admin-room.component.scss']
})
export class AdminRoomComponent implements OnInit {
  rooms: Room[];
  constructor(private bookingRoomsService: BookingRoomsService) { }

  ngOnInit() {
    this.bookingRoomsService.getRooms().subscribe(actionArray => {
      this.rooms = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Room;
      });
    });
  }
  editRoom(id: string) {
    console.log(id);
  }
  deleteRoom(id: string) {
    if (confirm('Delete room?')) {
      this.bookingRoomsService.removeRoom(id);
    }
  }
  onSubmit(form: NgForm) {
    let data = form.value;
    this.bookingRoomsService.addRoom(form.value);
  }
  resetForm(form: NgForm) {
    form.resetForm();
  }
}
