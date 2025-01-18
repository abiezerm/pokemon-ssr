import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list-skeleton',
  imports: [],
  template: `
    <div class="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-4">
      @for (pokemon of '123456789012'.split(''); track $index) {
        <div class="bg-white h-44 bg-opacity-25 rounded-lg shadow-md flex flex-col p-4 items-center justify-center cursor-pointer">
          <div class="rounded-full animate-pulse bg-gray-300 h-24 w-24">
          </div>
          <div class="flex text-center mt-5">
            <div class="h-4 w-20 bg-gray-300 rounded animate-pulse">
            </div>
          </div>
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListSkeletonComponent { }
