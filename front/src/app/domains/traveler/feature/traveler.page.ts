import { Component, inject } from '@angular/core';
import { ButtonComponent } from '@lucca-front/ng/button';
import { LuDialogService } from '@lucca-front/ng/dialog';
import { EmptyStateSectionComponent } from '@lucca-front/ng/empty-state';
import { IconComponent } from '@lucca-front/ng/icon';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';

import { TravelerGuideSidepanelComponent } from '../ui/traveler-guide-sidepanel/traveler-guide-sidepanel.component';

@Component({
  selector: 'lbnb-traveler-page',
  imports: [
    MainLayoutBlockComponent,
    MainLayoutComponent,
    PageHeaderComponent,
    EmptyStateSectionComponent,
    ButtonComponent,
    IconComponent,
  ],
  templateUrl: './traveler.page.html',
})
export default class JourneyPage {
  readonly #dialog = inject(LuDialogService);

  public openGuide() {
    this.#dialog.open({
      content: TravelerGuideSidepanelComponent,
      mode: 'drawer',
      size: 'S',
    });
  }
}
