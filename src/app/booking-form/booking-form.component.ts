import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  bookingForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.bookingForm = new FormGroup({
      name : new FormControl(null, Validators.required),
      email : new FormControl(null, [Validators.required, Validators.email]),
    });
  }
  onSubmit() {
    console.log(this.bookingForm);
  }
}
