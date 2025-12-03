import { Component, inject } from '@angular/core';
import { ButtonComponent } from '@lucca-front/ng/button';
import { LuDialogService } from '@lucca-front/ng/dialog';
import { EmptyStateSectionComponent } from '@lucca-front/ng/empty-state';
import { IconComponent } from '@lucca-front/ng/icon';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';

import { JourneyGuideSidepanelComponent } from '../ui/journey-guide-sidepanel/journey-guide-sidepanel.component';
import { JourneySheltersComponent } from '../ui/journey-shelters/journey-shelters.component';

@Component({
  selector: 'lbnb-journey-page',
  imports: [
    MainLayoutBlockComponent,
    MainLayoutComponent,
    PageHeaderComponent,
    JourneySheltersComponent,
    EmptyStateSectionComponent,
    ButtonComponent,
    IconComponent,
  ],
  templateUrl: './journey.page.html',
  styleUrl: './journey.page.scss',
})
export default class JourneyPage {
  readonly #dialog = inject(LuDialogService);

  public openGuide() {
    this.#dialog.open({
      content: JourneyGuideSidepanelComponent,
      mode: 'drawer',
      size: 'S',
    });
  }
}
