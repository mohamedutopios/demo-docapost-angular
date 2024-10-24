import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleService } from '../../utils/services/title.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

titrePage: string = '';

constructor(private titleService: TitleService) { 



}

ngOnInit() {
  this.titleService.currentTitle.subscribe(title => this.titrePage = title)
}

}