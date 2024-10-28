import { Component, OnInit } from '@angular/core';
import { Event, EventStateService } from '../../services/state/event-state.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'create-event-modal',
    templateUrl: 'create-event-modal.component.html',
    standalone: true,
    imports: [FormsModule, CommonModule]
})

export class CreateEventModalComponent implements OnInit  {
  showModal : boolean = false;
  newEvent: Event = { name: '', date: '' };

  constructor(private eventService: EventStateService) {}

  ngOnInit() {
    this.eventService.showModal$.subscribe(isVisible => {
      this.showModal = isVisible;
    });
  }

  addEvent() {
    if (this.newEvent.name && this.newEvent.date) {
      this.eventService.addEvent(this.newEvent);
      this.newEvent = { name: '', date: '' };
      this.eventService.closeModal();
    }
  }

  closeModal() {
    this.eventService.closeModal();
  }
}