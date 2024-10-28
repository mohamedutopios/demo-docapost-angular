import { Component } from '@angular/core';
import { TitleService } from '../../utils/services/title.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';
import { User } from '../../utils/interfaces/user';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { Pokemon } from '../../utils/interfaces/pokemon';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule,
     FormsModule, 
     PokemonCardComponent, UserCardComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  pokemon = 'Pikachu';

  //pokemons = ['Pikachu', 'Bulbizarre', 'Salamèche', 'Carapuce', "Rondoudou", "Mewtwo"];

   pokemons : Pokemon[]= [
    { "name": "Pikachu", "type": "Électrique", "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" },
    { "name": "Bulbizarre", "type": "Plante/Poison", "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" },
    { "name": "Salamèche", "type": "Feu", "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" },
    { "name": "Carapuce", "type": "Eau", "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" },
    { "name": "Pikachu", "type": "Électrique", "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" },
    { "name": "Goupix", "type": "Feu", "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png" },
    { "name": "Nidoran♀", "type": "Poison", "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png" },
    { "name": "Rondoudou", "type": "Fée", "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png" },
    { "name": "Mélofée", "type": "Fée", "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" },
    { "name": "Dracolosse", "type": "Dragon/Vol", "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png" },
    { "name": "Ronflex", "type": "Normal", "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png" }
  ]; 


  users: User[] = [{lastName: 'Doe', firstName: 'John', email: 'John@gmail.com'}, 
    {lastName: 'Doe', firstName: 'Jane', email: 'jane@gmail.com'}, 
    {lastName: 'Doe', firstName: 'Jack', email: 'jack@gmail.com'}];


  constructor(private titleService: TitleService) { 

  }

  ngOnInit() {
    this.titleService.setTitle('Parent')
  }

}
