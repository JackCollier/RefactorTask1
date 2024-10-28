import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventApiService } from '../api/event-api.service';

export interface Event {
  id?: number;
  name: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class EventStateService {
  private eventsSubject = new BehaviorSubject<Event[]>([]);
  private showModalSubject = new BehaviorSubject<boolean>(false);
  private errorMessageSubject = new BehaviorSubject<string>('');
  events$ = this.eventsSubject.asObservable();
  showModal$ = this.showModalSubject.asObservable();
  errorMessage$ = this.errorMessageSubject.asObservable();

  constructor(private eventApiService: EventApiService) {
    this.getEvents();
  }

  getEvents() {
    this.eventApiService.getEvents().subscribe({
      next: (events) => {
        this.eventsSubject.next(events);
        this.errorMessageSubject.next('');
      },
      error: () => {
        this.errorMessageSubject.next('Error Retrieving Events');
      },
    });
  }

  addEvent(event: Event) {
    this.eventApiService.createEvent(event).subscribe({
      next: (event) => {
        const currentEvents = this.eventsSubject.getValue();
        this.eventsSubject.next([...currentEvents, event]);
        this.errorMessageSubject.next('');
      },
      error: () => {
        this.errorMessageSubject.next('Error Creating Event');
      },
    });
  }

  deleteEvent(event: Event) {
    this.eventApiService.deleteEvent(event).subscribe({
      next: () => {
        const updatedEvents = this.eventsSubject
          .getValue()
          .filter((event) => event.id !== event.id);
        this.eventsSubject.next(updatedEvents);
        this.errorMessageSubject.next('');
      },
      error: () => {
        this.errorMessageSubject.next('Error Deleting Event');
      },
    });
  }

  openModal() {
    this.showModalSubject.next(true);
  }

  closeModal() {
    this.showModalSubject.next(false);
  }
}
