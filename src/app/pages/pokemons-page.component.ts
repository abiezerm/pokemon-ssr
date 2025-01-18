import { ApplicationRef, ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from "../pokemons/components/pokemon-list.component";
import { PokemonListSkeletonComponent } from "../pokemons/components/pokemon-list-skeleton.component";
import { toSignal } from '@angular/core/rxjs-interop';
import { PokemonService } from '../pokemons/services/pokemon.service';
import { SimplePokemon } from '../pokemons/types';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemons-page',
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
  template: `
    <h1 class="text-3xl">Pokemon list</h1>
    <h2 class="text-xl">Current page</h2>

    <hr class="my-2" >

    @if(pokemons().length !== 0) {
      <app-pokemon-list [pokemons]="pokemons()" />
    } @else {
      <app-pokemon-list-skeleton />
    }

    <div class="flex justify-between">
      <button (click)="loadPokemons(-1)" class="mt-2">Previous</button>
      <button (click)="loadPokemons(+1)"  class="mt-2">Next</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent implements OnInit {
  private title = inject(Title);
  private router = inject(Router)
  private route = inject(ActivatedRoute);
  private pokemonService = inject(PokemonService);

  // private appRef = inject(ApplicationRef);
  public isLoading = signal(true);
  public pokemons = signal<SimplePokemon[]>([]);

  public currentPage = toSignal<number>(
    this.route.queryParamMap.pipe(
      map((params) => params.get('page') ?? '1'),
      map(page => isNaN(+page) ? 1 : +page),
      map(page => Math.max(1, page))
    )
  )
  // private $appState =  this.appRef.isStable.subscribe((isStable) => {
  //   console.log({isStable})
  // });

  ngOnInit(): void {
    this.loadPokemons();
    // setTimeout(() => {
    //   this.isLoading.set(false);
    // }, 5000);
  }

  loadPokemons(page: number = 0): void {
    const pageToLoad = this.currentPage()! + page;
    this.pokemonService.loadPage(pageToLoad)
    .pipe(
      tap(() => this.router.navigate([], { queryParams: { page: pageToLoad } })),
      tap(() => this.title.setTitle(`Pokemon list - Page ${pageToLoad === 0 ? 1 : pageToLoad}`))
    )
    .subscribe((pokemons) => {
      this.pokemons.set(pokemons);
      //console.log({pokemons})
    });
  }
}
