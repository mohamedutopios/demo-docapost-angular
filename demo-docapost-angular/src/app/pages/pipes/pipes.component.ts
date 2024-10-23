import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RainbowsPipe } from '../../utils/pipes/rainbows.pipe';

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

}
