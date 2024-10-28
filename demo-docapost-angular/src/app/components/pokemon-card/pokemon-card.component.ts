import { Component, Input } from '@angular/core';
import { Pokemon } from '../../utils/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {

//@Input() pokemon: string = 'poke';

@Input() pokemon: Pokemon;

}
