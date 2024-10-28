import { Component, EventEmitter, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Output() clickEvent = new EventEmitter();

  handleClick() {
    this.clickEvent.emit("Hello from button");
  }



}
