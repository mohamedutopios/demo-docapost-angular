import { Component } from '@angular/core';
import { TitleService } from '../../utils/services/title.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  pokemon = 'Pikachu';

  constructor(private titleService: TitleService) { 

  }
  ngOnInit() {
    this.titleService.setTitle('Parent')
  }



}
