import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  componentId: number = 0;
  private subject = new Subject<any>();
  sendClickEvent() {
    this.subject.next();
  }
  getClickEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }
}
