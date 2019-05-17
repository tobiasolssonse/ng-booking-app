import { Component, OnInit } from '@angular/core';

import { Room } from '../../shared/room.model';
import { BookingRoomsService } from '../../shared/booking-rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-room',
  templateUrl: './admin-room.component.html',
  styleUrls: ['./admin-room.component.scss']
})
export class AdminRoomComponent implements OnInit {
  rooms: Room[];
  formData: Room;
  constructor(private bookingRoomsService: BookingRoomsService) { }
  ngOnInit() {
    this.resetForm();
    this.bookingRoomsService.getRooms().subscribe(actionArray => {
      this.rooms = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Room;
      });
    });
  }
  resetForm() {
    this.formData = {
      id: null,
      name: '',
      description: '',
      imagePath: ''
    };
  }
  editRoom(room: Room) {
    console.log(room);
    this.formData = Object.assign({}, room);
  }
  deleteRoom(id: string) {
    if (confirm('Delete room?')) {
      this.bookingRoomsService.removeRoom(id);
    }
  }
  onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      this.bookingRoomsService.addRoom(data);
    } else {
      this.bookingRoomsService.updateRoom(form.value);
    }
    this.resetForm();
  }
}
