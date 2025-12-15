import type { LuccaIcon } from '@lucca-front/icons';

import { Component, input } from '@angular/core';
import { PortalDirective, type PortalContent } from '@lucca-front/ng/core';
import { IconComponent } from '@lucca-front/ng/icon';

@Component({
  selector: 'lbnb-info',
  imports: [PortalDirective, IconComponent],
  templateUrl: './info.component.html',
})
export class InfoComponent {
  readonly icon = input<LuccaIcon>();
  readonly hasEmptyIcon = input<boolean>(false);
  readonly heading = input.required<string>();
  readonly description = input.required<string | PortalContent>();
}
