import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  template:`
    <app-navbar />

    <div class="max-w-3xl m-auto mt-16 px-2">
      <router-outlet />
    </div>
  `,
})
export class AppComponent {
  title = 'pokemon-ssr';
}
