import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../room.model';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input('room') room: Room;
  @Output() change = new EventEmitter<Room>();
  status: boolean;
  constructor() { }

  ngOnInit() {
  }
  toggleAsActiveRoom(){
    console.log('ROOM.COMPONENT: clicked');
    this.status = !this.status;
    this.change.emit({
      name : 'testnamn',
      description : 'test desc',
      imagePath : 'fake imagepath',
    });
  }
}
