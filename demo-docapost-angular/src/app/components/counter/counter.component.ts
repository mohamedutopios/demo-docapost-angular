import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input() count: number = 0;
  @Output() countChange = new EventEmitter();

  decrement(){
    this.countChange.emit(this.count - 1);
  }

  increment(){
    this.countChange.emit(this.count + 1);
  }

}
