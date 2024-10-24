import { CommonModule } from '@angular/common'
import { Component } from '@angular/core';
import { TitleService } from '../../utils/services/title.service';

type days = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.css'
})
export class BlocksComponent {


  constructor(private titleService: TitleService) { 

  }

  ngOnInit() {
    this.titleService.setTitle('Blocks')
  }



  isLogged = false


  toggleLogged(){
    this.isLogged = !this.isLogged;
  }


  today: days = 'Sunday'

  fruits = ['pomme','poire','abricot','pêche'];

  user = {
    name: 'Jean Michel'
  }


}
