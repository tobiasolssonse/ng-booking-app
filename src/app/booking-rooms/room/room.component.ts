import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../room.model';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input() room: Room;
  @Output() change = new EventEmitter<Room>();
  @Input() selectedRoom: Room;

  constructor() { }

  ngOnInit() {
  }
  toggleAsActiveRoom(eventArgs: Room) {
    // this.activeRoom = this.room.isSelected;
    console.log(this.selectedRoom);
    this.change.emit({
      name : eventArgs.name,
      description : eventArgs.description,
      imagePath : eventArgs.imagePath
    });
  }
}
