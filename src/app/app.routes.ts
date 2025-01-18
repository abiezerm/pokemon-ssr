import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'pokemons', loadComponent: () => import('./pages/pokemons-page.component') },
  { path: 'pokemons/:id', loadComponent: () => import('./pages/pokemon-page.component') },
  { path: 'about', loadComponent: () => import('./pages/about-page.component') },
  { path: 'contact', loadComponent: () => import('./pages/contact-page.component') },
  { path: 'pricing', loadComponent: () => import('./pages/pricing-page.component') },
  { path: '**', redirectTo: 'about' },
];
