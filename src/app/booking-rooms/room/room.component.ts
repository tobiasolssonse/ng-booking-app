import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../room.model';
@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input('room') room: Room;
  @Output() change = new EventEmitter<Room>();

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    console.log('clicked');
    this.change.emit();
  }
}
