import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  imports: [],
  template: `
    <h1 class="text-3xl">About the app</h1>
    <hr class="my-2">

    <section>
      <p class="mb-4">
        Laboris magna laborum veniam dolor officia minim mollit reprehenderit reprehenderit
        adipisicing ipsum aliquip veniam. Culpa ex cillum in culpa esse
        laboris in sunt veniam sint nostrud. Aliquip laboris est esse tempor.
        Ex nulla quis sit elit amet. Mollit occaecat cupidatat amet qui aute
        commodo cupidatat voluptate magna laboris.
      </p>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent { }
