import { RouterLink } from '@angular/router';
import { ChangeDetectionStrategy, Component, computed, effect, input } from '@angular/core';
import { SimplePokemon } from '../types';

@Component({
  selector: 'app-pokemon-card',
  imports: [RouterLink],
  template: `
    <div
      [routerLink]="['/pokemons', pokemon().id]"
      class="animate-fadeIn bg-blue-500 h-44 bg-opacity-25 rounded-lg shadow-md flex flex-col p-4 items-center justify-center cursor-pointer">
      <img
        [src]="pokemonImage()"
        [alt]="pokemon().name"
        class="w-24 h-24"
        width="96px"
        height="96px"
      />
      <div class="text-center mt-2">
        <h2 class="text-xl font-bold capitalize text-with">{{ pokemon().name }}</h2>
      </div>
    </div>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  public pokemon = input.required<SimplePokemon>();

  public readonly pokemonImage = computed(() =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon().id}.png`
  );

  //logEffect = effect(() => {console.log('pokemonCard: ', this.pokemon())});
}
