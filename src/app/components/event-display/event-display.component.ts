import { Component, OnInit } from '@angular/core';
import { Event, EventService } from '../../services/event.service';

@Component({
    selector: 'event-display',
    templateUrl: 'event-display.component.html'
})

export class EventDisplay implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.events$.subscribe(events => {
      this.events = events;
    });
  }
}