import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../room.model';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input() room: Room;
  @Input() isSelected: boolean;
  @Output() change = new EventEmitter<Room>();
  activeRoom = false;
  constructor() { }

  ngOnInit() {
  }
  toggleAsActiveRoom(eventArgs: Room) {
    this.room.isSelected = !eventArgs.isSelected;
    this.activeRoom = this.room.isSelected;
    this.change.emit({
      name : eventArgs.name,
      description : eventArgs.description,
      imagePath : eventArgs.imagePath,
      isSelected :  this.activeRoom,
    });
  }
}
