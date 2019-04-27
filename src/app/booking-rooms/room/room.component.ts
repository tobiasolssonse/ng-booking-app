import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../room.model';
import { BookingRoomsService } from '../booking-rooms.service';
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
  onSelected(){
    this.bookingRoomsService.selectedRoom.emit(this.room);
  }
  toggleAsActiveRoom(eventArgs: Room) {
    // this.change.emit({
    //   name : eventArgs.name,
    //   description : eventArgs.description,
    //   imagePath : eventArgs.imagePath
    // });
  }
}
