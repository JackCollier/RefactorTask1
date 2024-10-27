import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Event {
  name: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
    private eventsSubject = new BehaviorSubject<Event[]>([]);
    events$ = this.eventsSubject.asObservable();
  
    addEvent(event: Event) {
      const currentEvents = this.eventsSubject.getValue();
      this.eventsSubject.next([...currentEvents, event]);
    }
  
    removeEvent(eventToRemove: Event) {
      const updatedEvents = this.eventsSubject.getValue().filter(event => event !== eventToRemove);
      this.eventsSubject.next(updatedEvents);
    }
}
