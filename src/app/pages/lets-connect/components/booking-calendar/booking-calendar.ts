
import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-calendar.html',
  styleUrl: './booking-calendar.css'
})
export class BookingCalendar {

  // Initial calendar month
  currentMonth = 10;
  currentYear = 2026;

  // Selected date
  selectedDate: Date | null = null;

  // Time slots
  availableTimes = [
    '9:00 AM',
    '10:30 AM',
    '12:00 PM',
    '2:00 PM',
    '3:30 PM',
    '5:00 PM'
  ];

  selectedTime: string | null = null;

  // Send selected date and time to parent
  @Output() bookingSelection = new EventEmitter<{
    date: Date;
    time: string;
  }>();

  // Calendar headings
  weekDays = [
    'SUN', 'MON', 'TUE', 'WED',
    'THU', 'FRI', 'SAT'
  ];

  // Display month name
  get monthName(): string {
    return new Date(
      this.currentYear,
      this.currentMonth
    ).toLocaleString('en-US', { month: 'long' });
  }

  // Get number of days in current month
  get daysInMonth(): number {
    return new Date(
      this.currentYear,
      this.currentMonth + 1,
      0
    ).getDate();
  }

  // Get starting weekday
  get startingDay(): number {
    return new Date(
      this.currentYear,
      this.currentMonth,
      1
    ).getDay();
  }

  // Generate calendar cells
  get calendarDays(): (number | null)[] {

    const days: (number | null)[] = [];

    for (let i = 0; i < this.startingDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= this.daysInMonth; day++) {
      days.push(day);
    }

    return days;
  }

  // Check if date is available
  isAvailable(day: number): boolean {

    const date = new Date(
      this.currentYear,
      this.currentMonth,
      day
    );

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const weekday = date.getDay();

    return date >= today &&
      weekday >= 1 &&
      weekday <= 5;
  }

  // Check selected date
  isSelected(day: number): boolean {

    return !!this.selectedDate &&
      this.selectedDate.getDate() === day &&
      this.selectedDate.getMonth() === this.currentMonth &&
      this.selectedDate.getFullYear() === this.currentYear;
  }

  // Select date
  selectDate(day: number): void {

    if (!this.isAvailable(day)) {
      return;
    }

    this.selectedDate = new Date(
      this.currentYear,
      this.currentMonth,
      day
    );

    this.selectedTime = null;
  }

  // Select time
  selectTime(time: string): void {

    this.selectedTime = time;

    if (this.selectedDate) {
      this.bookingSelection.emit({
        date: this.selectedDate,
        time: time
      });
    }
  }

  // Previous month
  previousMonth(): void {

    if (
      this.currentYear === 2026 &&
      this.currentMonth === 10
    ) {
      return;
    }

    this.currentMonth--;

    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }

    this.selectedDate = null;
    this.selectedTime = null;
  }

  // Next month
  nextMonth(): void {

    this.currentMonth++;

    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }

    this.selectedDate = null;
    this.selectedTime = null;
  }

}
