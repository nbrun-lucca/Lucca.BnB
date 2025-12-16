import type { DecorativePalette, Palette } from '@lucca-front/ng/core';

import { Component, input } from '@angular/core';

@Component({
  selector: 'lbnb-map-bubble-right',
  imports: [],
  templateUrl: './map-bubble-right.component.html',
  host: { class: 'pr-u-displayContents' },
})
export class MapBubbleRightComponent {
  readonly palette = input.required<Palette | DecorativePalette>();
}
