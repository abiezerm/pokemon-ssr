import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="text-white top-0 absolute z-50 w-full flex justify-end px-2 py-3 gap-4 bg-slate-900 shadow-md">
      <a class="hover:underline" routerLinkActive="text-blue-500 underline" routerLink="/pokemons/page/1">Pokemons</a>
      <a class="hover:underline" routerLinkActive="text-blue-500 underline" routerLink="/about">About</a>
      <a class="hover:underline" routerLinkActive="text-blue-500 underline" routerLink="/pricing">Pricing</a>
      <a class="hover:underline" routerLinkActive="text-blue-500 underline" routerLink="/contact">Contact</a>

    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent { }
