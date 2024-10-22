import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [NgClass],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css',
})
export class PresentationComponent {
  name = 'Jean-Michel';
  isLogged = true;

  galaxy =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQYcEN8FX65k2D6A43-4aOmusLCQFLSrztQ&s';

  description = 'Un chat galactique';

  myStyle = {
    backgroundColor: 'aqua',
    textDecoration: 'underline',
  };

  maClasseA = 'text-bg-danger p-3';
  maClasseB = 'badge';
  maClasseC = 'text-bg-info p-3'


  toggleLogged(){
    this.isLogged = !this.isLogged;
  }

  

  
}
