
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingCalendar } from './components/booking-calendar/booking-calendar';
import { BookingForm } from './components/booking-form/booking-form';

@Component({
  selector: 'app-lets-connect',
  standalone: true,
  imports: [
    CommonModule,
    BookingCalendar,
    BookingForm
  ],
  templateUrl: './lets-connect.html',
  styleUrl: './lets-connect.css'
})
export class LetsConnect {

  selectedBooking: { date: Date; time: string } | null = null;

  onBookingSelection(selection: { date: Date; time: string }) {
    this.selectedBooking = selection;
  }
}
