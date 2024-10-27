import { Component } from '@angular/core';
import { CreateEventModalComponent } from './components/create-event-modal/create-event-modal.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ NavBarComponent, CreateEventModalComponent]
})
export class AppComponent {

}
