import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

private titleSource = new BehaviorSubject<string>("Default title");

currentTitle = this.titleSource.asObservable();

setTitle(title: string) {
  this.titleSource.next(title);
}
  
}
