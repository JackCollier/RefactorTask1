import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../state/event-state.service';

@Injectable({
  providedIn: 'root',
})
export class EventApiService {
  private apiUrl = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, event);
  }

  deleteEvent(event: Event): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${event.id}`);
  }
}
