import { Component, OnInit } from '@angular/core';
import {
  Event,
  EventStateService,
} from '../../services/state/event-state.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'create-event-modal',
  templateUrl: 'create-event-modal.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class CreateEventModalComponent {
  newEvent: Event = { name: '', date: '' };

  constructor(public eventStateService: EventStateService) {}

  addEvent() {
    if (this.newEvent.name && this.newEvent.date) {
      this.eventStateService.addEvent(this.newEvent);
      this.newEvent = { name: '', date: '' };
      this.eventStateService.closeModal();
    }
  }

  closeModal() {
    this.eventStateService.closeModal();
  }
}
