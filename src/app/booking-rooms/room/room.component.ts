import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../../shared/room.model';
import { BookingRoomsService } from '../../shared/booking-rooms.service';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input() room: Room;
  @Input() selectedRoom: Room;

  constructor(private bookingRoomsService: BookingRoomsService) { }

  ngOnInit() {
  }
  // onSelected() {
  //   this.bookingRoomsService.selectedRoom.emit(this.room);
  // }

}
