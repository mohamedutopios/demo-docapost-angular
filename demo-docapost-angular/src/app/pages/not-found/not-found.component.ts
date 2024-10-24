import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleService } from '../../utils/services/title.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

  constructor(private titleService: TitleService) { 

  }
  ngOnInit() {
    this.titleService.setTitle('Not Found')
  }

}
