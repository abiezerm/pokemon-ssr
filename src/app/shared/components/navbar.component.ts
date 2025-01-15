import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
    <nav class="text-white top-0 absolute z-50 w-full flex justify-end px-2 py-3 gap-4 bg-slate-900 shadow-md">
      <a class="hover:underline" routerLink="/about">About</a>
      <a class="hover:underline" routerLink="/pricing">Pricing</a>
      <a class="hover:underline" routerLink="/contact">Contact</a>

    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent { }
