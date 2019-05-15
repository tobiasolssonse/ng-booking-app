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
  constructor(public bookingRoomsService: BookingRoomsService) { }
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
  resetForm(form?: NgForm) {
    this.bookingRoomsService.formData = {
      id: null,
      name: '',
      description: '',
      imagePath: ''
    }
  }
  editRoom(room: Room) {
    this.bookingRoomsService.formData = Object.assign({}, room);
  }
  deleteRoom(id: string) {
    if (confirm('Delete room?')) {
      this.bookingRoomsService.removeRoom(id);
    }
  }
  onSubmit(form: NgForm) {
    this.bookingRoomsService.addRoom(form.value);
  }
}
