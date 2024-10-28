import { Component, OnInit } from '@angular/core';
import { EventStateService } from '../../services/state/event-state.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nav-bar-component',
  templateUrl: 'nav-bar.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class NavBarComponent {
  constructor(private eventService: EventStateService) {}

  openModal() {
    this.eventService.openModal();
  }
}
