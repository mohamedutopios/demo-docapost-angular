import { Component } from '@angular/core';
import { TitleService } from '../../utils/services/title.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
  constructor(private titleService: TitleService) { 

  }
  ngOnInit() {
    this.titleService.setTitle('Home')
  }

}
