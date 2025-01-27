import { TestBed } from "@angular/core/testing";
import { provideRouter, Router } from "@angular/router";
import { Location } from "@angular/common";
import { routes } from "./app.routes";

describe('App Routes', () => {

  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)]
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should navigate to "about" redirects to "/about"', async () => {
    await router.navigate(['about']);
    expect(location.path()).toBe('/about');
  });

  it('should navigate to "pokemons/page/1" redirects to "/pokemons/page/1"', async () => {
    await router.navigate(['pokemons/page/1']);
    expect(location.path()).toBe('/pokemons/page/1');
  });

  it('should navigate to "about" when an unknown page is set', async () => {
    await router.navigate(['unknown-page']);
    expect(location.path()).toBe('/about');
  });

  it('should load the proper component', async () => {
    for (const {path, componentName} of [
      {path: 'about', componentName: 'AboutPageComponent'},
      {path: 'pokemons/page/:page', componentName: 'PokemonsPageComponent'},
    ]) {
      const componentRoute = routes.find(route => route.path === path)!;

      expect(componentRoute).toBeDefined();
      const component = await componentRoute.loadComponent!() as any;

      expect(component.default.name).toBe(componentName);
    }
  });

});
