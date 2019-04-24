import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../room.model';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input('room') room: Room;
  @Input('isSelected') isSelected: boolean;
  @Output() change = new EventEmitter<Room>();
  activeRoom: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggleAsActiveRoom(eventArgs: Room) {
    this.room.isSelected = !eventArgs.isSelected;
    console.log('ROOM.COMPONENT: clicked', eventArgs);
    this.activeRoom = this.room.isSelected;
    this.change.emit({
      name : eventArgs.name,
      description : eventArgs.description,
      imagePath : eventArgs.imagePath,
      isSelected :  this.activeRoom,
    });
  }
}
