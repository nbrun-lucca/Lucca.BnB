import type { DecorativePalette, Palette } from '@lucca-front/ng/core';

import { Component, input } from '@angular/core';

@Component({
  selector: 'lbnb-map-bubble-left',
  imports: [],
  templateUrl: './map-bubble-left.component.html',
  host: { class: 'pr-u-displayContents' },
})
export class MapBubbleLeftComponent {
  readonly palette = input.required<Palette | DecorativePalette>();
}
