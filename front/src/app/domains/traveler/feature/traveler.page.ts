import { Component, inject } from '@angular/core';
import { AppStore } from '@app/shared/data/stores/app.store';
import { ButtonComponent } from '@lucca-front/ng/button';
import { LuDialogService } from '@lucca-front/ng/dialog';
import { EmptyStateSectionComponent } from '@lucca-front/ng/empty-state';
import { IconComponent } from '@lucca-front/ng/icon';
import { LinkComponent } from '@lucca-front/ng/link';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';

import { TravelerGuideSidepanelComponent } from '../ui/traveler-guide-sidepanel/traveler-guide-sidepanel.component';
import { TravelerInfosComponent } from '../ui/traveler-infos/traveler-infos.component';

@Component({
  selector: 'lbnb-traveler-page',
  imports: [
    MainLayoutBlockComponent,
    MainLayoutComponent,
    PageHeaderComponent,
    EmptyStateSectionComponent,
    TravelerInfosComponent,
    LinkComponent,
    ButtonComponent,
    IconComponent,
  ],
  templateUrl: './traveler.page.html',
})
export default class JourneyPage {
  readonly store = inject(AppStore);
  readonly #dialog = inject(LuDialogService);

  public openGuide() {
    this.#dialog.open({
      content: TravelerGuideSidepanelComponent,
      mode: 'drawer',
      size: 'S',
    });
  }
}
