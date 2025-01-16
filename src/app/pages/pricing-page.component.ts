import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  imports: [],
  template: `
    <h1 class="text-3xl">Pricing the app</h1>
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
export default class PricingPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Pricing page');
    this.meta.updateTag({ name: 'description', content: 'pricing information of the website bla' });
    this.meta.updateTag({ name: 'og:title', content: 'Pricing Page' });
    this.meta.updateTag({ name: 'keywords', content: 'Hello,World,Abiezer,Matos,Pokemon' });
  }
}
