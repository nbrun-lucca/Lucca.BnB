import type { DecorativePalette, Palette } from '@lucca-front/ng/core';

import { Component, input } from '@angular/core';

@Component({
  selector: 'lbnb-bubbles-left',
  imports: [],
  templateUrl: './bubbles-left.component.html',
  host: { class: 'pr-u-displayContents' },
})
export class BubblesLeftComponent {
  readonly palette = input.required<Palette | DecorativePalette>();
}
