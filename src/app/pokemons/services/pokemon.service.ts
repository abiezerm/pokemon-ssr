import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { PokeAPIResponse, Pokemon, SimplePokemon } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private http = inject(HttpClient);

  public loadPage(page: number): Observable<SimplePokemon[]> {
    if ( page !== 0) {
      --page;
    }

    page = Math.max(0, page);

    return this.http.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`)
      .pipe(
        map((response) => {
          const simplePokemons: SimplePokemon[] = response.results.map(
            (pokemon) => ({
              id: pokemon.url.split('/').at(-2) ?? '',
              name: pokemon.name,
          }))
          return simplePokemons;
        }),
        // tap((simplePokemons) => console.log({simplePokemons}))
      );
  }

  public loadPokemon(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

}