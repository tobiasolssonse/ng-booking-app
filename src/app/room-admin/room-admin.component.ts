import { Component, OnInit } from '@angular/core';
import { Room } from '../shared/room.model';
import { BookingRoomsService } from '../shared/booking-rooms.service';
@Component({
  selector: 'app-room-admin',
  templateUrl: './room-admin.component.html',
  styleUrls: ['./room-admin.component.scss']
})
export class RoomAdminComponent implements OnInit {
  rooms: Room[];
  headline: string;
  constructor(private bookingRoomsService: BookingRoomsService) { }

  ngOnInit() {
    this.bookingRoomsService.getRooms().subscribe(actionArray => {
      this.rooms = actionArray.map(item => {
        return {
          ...item.payload.doc.data()
        } as Room;
      });
    });
  }
  editRoom(event: any) {
    console.log(event);
    console.log(this.headline);
  }
}
