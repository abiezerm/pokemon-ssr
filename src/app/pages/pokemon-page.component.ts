import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Pokemon } from '../pokemons/types';
import { PokemonService } from '../pokemons/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemon-page',
  imports: [],
  template: `
    @if( pokemon() === null ){
      <div class="flex justify-center">
        <h1>Loading...</h1>
      </div>
    } @else {
      @let myPokemon = pokemon()!;
      <section class="flex flex-col justify-center">
        <div class="flex justify-center">
          <h1 class="text-4xl font-bold capitalize my-5">{{myPokemon.name}}</h1>
        </div>
      </section>

      <section class="flex flex-col justify-center items-center w-full">
        <img
          class="w-64 h-64"
          [src]="myPokemon.sprites.other?.['official-artwork']?.front_default"
          [alt]="myPokemon.name"
          height="256px"
          width="256px"
        />

        @if( myPokemon.cries.latest !== null ){
          <audio controls class="my-10">
            <source [src]="myPokemon.cries.latest" type="audio/wav">
          </audio>
        }
      </section>

      <section class="flex flex-col justify-center">
        <h2 class="text-2xl font-bold mt-2">Abilities</h2>
        <div class="flex flex-wrap items-center">
          @for(ability of myPokemon.abilities; track ability.ability.name ){
            <span class="mx-2">{{ability.ability.name}}</span>
          }
        </div>
      </section>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private route = inject(ActivatedRoute);
  private pokemonService = inject(PokemonService);

  public pokemon = signal<Pokemon | null>(null);


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    if (!id) return;

    this.loadPokemon(id);
  }

  public loadPokemon(id: string) {
    this.pokemonService.loadPokemon(id)
    .pipe(
      tap(({name, id}) => {
        const pageTitle = `#${id} - ${name}`;
        const pageDescription = `Pokemon ${name} details`;
        this.title.setTitle(pageTitle);
        this.meta.updateTag({name: 'description', content: pageDescription});
        this.meta.updateTag({name: 'og:title', content: pageTitle});
        this.meta.updateTag({name: 'og:description', content: pageDescription});
        this.meta.updateTag({
          name: 'og:image',
          content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        });
      })
    )
    .subscribe(this.pokemon.set);
  }
}
