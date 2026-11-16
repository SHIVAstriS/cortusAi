
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.css'
})
export class BookingForm {

  @Input() selectedDate!: Date;
  @Input() selectedTime!: string;

  bookingConfirmed = false;

  formData = {
    name: '',
    email: '',
    mobile: '',
    message: ''
  };

  confirmBooking(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.bookingConfirmed = true;

    console.log('Booking Details:', {
      ...this.formData,
      date: this.selectedDate,
      time: this.selectedTime
    });
  }
}
