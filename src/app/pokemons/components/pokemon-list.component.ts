import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PokemonCardComponent } from "./pokemon-card.component";
import { SimplePokemon } from '../types';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCardComponent],
  template: `
    <div class="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
      @for (pokemon of pokemons(); track pokemon.id) {
        <app-pokemon-card [pokemon]="pokemon" />
      }

    </div>
    <!-- TODO:  -show if there is not pokemons->
    <!-- <div class="col-span-5 text-center border-white h-28 flex justify-center items-center">
      No pokemons
    </div> -->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
  public pokemons = input.required<SimplePokemon[]>();
}
