import { Component, OnInit } from '@angular/core';
import {
  Event,
  EventStateService,
} from '../../services/state/event-state.service';
import { CommonModule } from '@angular/common';
import { EventApiService } from '../../services/api/event-api.service';

@Component({
  selector: 'event-display',
  templateUrl: 'event-display.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class EventDisplayComponent {
  constructor(
    public eventStateService: EventStateService,
    private eventApiService: EventApiService
  ) {
    setInterval(() => {}, 1000);
  }

  getCountdown(eventDate: string): string {
    const currentDate = new Date();
    const targetDate = new Date(eventDate);
    const difference = targetDate.getTime() - currentDate.getTime();

    if (difference <= 0) {
      return 'Event has passed';
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  removeEvent(event: Event) {
    this.eventStateService.removeEvent(event);
  }
}
