import type { DecorativePalette, Palette } from '@lucca-front/ng/core';

import { Component, input } from '@angular/core';

@Component({
  selector: 'lbnb-bubbles-right',
  imports: [],
  templateUrl: './bubbles-right.component.html',
  host: { class: 'pr-u-displayContents' },
})
export class BubblesRightComponent {
  readonly palette = input.required<Palette | DecorativePalette>();
}
