import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RainbowsPipe } from '../../utils/pipes/rainbows.pipe';
import { TitleService } from '../../utils/services/title.service';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, RainbowsPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

message = "HELLO WORLD";
pi = Math.PI;
today = new Date();
montant = 123456.789;

constructor(private titleService: TitleService) { 

}
ngOnInit() {
  this.titleService.setTitle('Pipe')
}


}
