import { Injectable } from '@angular/core';


export interface Event {
  name: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
}
