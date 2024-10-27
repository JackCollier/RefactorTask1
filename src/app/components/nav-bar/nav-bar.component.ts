import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'nav-bar-component',
    templateUrl: 'nav-bar.component.html',
    standalone: true,
    imports: [FormsModule, CommonModule]
})

export class NavBarComponent  {

    constructor(private eventService: EventService) { }
   
    openModal() {
        this.eventService.openModal()
    }
  
}