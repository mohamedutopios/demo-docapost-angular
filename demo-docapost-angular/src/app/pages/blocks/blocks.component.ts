import { Component } from '@angular/core';

type days = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.css'
})
export class BlocksComponent {

  isLogged = true


  toggleLogged(){
    this.isLogged = !this.isLogged;
  }


  today: days = 'Sunday'


}
