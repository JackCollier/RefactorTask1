import { Component, OnInit } from '@angular/core';
import { Event, EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'event-display',
    templateUrl: 'event-display.component.html',
    standalone: true,
    imports: [CommonModule]
})

export class EventDisplayComponent  {
  constructor(public eventService: EventService) {}

  getCountdown(eventDate: string): string {
    const currentDate = new Date();
    const targetDate = new Date(eventDate);

    const difference = targetDate.getTime() - currentDate.getTime();

    if (difference <= 0) {
      return 'Event has passed';
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return `${days} days, ${hours} hours, and ${minutes} minutes remaining`;
  }

  removeEvent(event: Event) {
    this.eventService.removeEvent(event)
  }
}