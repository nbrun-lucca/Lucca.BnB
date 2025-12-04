import { Component, inject } from '@angular/core';
import { ButtonComponent } from '@lucca-front/ng/button';
import { CalloutActionsComponent, CalloutComponent } from '@lucca-front/ng/callout';
import { LuDialogService } from '@lucca-front/ng/dialog';
import { EmptyStateSectionComponent } from '@lucca-front/ng/empty-state';
import { IconComponent } from '@lucca-front/ng/icon';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';

import { HostGuideSidepanelComponent } from '../ui/host-guide-sidepanel/host-guide-sidepanel.component';
import { HostInfosComponent } from '../ui/host-infos/host-infos.component';

@Component({
  selector: 'lbnb-host-page',
  imports: [
    MainLayoutBlockComponent,
    MainLayoutComponent,
    PageHeaderComponent,
    EmptyStateSectionComponent,
    HostInfosComponent,
    CalloutComponent,
    CalloutActionsComponent,
    ButtonComponent,
    IconComponent,
  ],
  templateUrl: './host.page.html',
})
export default class HostPage {
  readonly #dialog = inject(LuDialogService);

  hasShelter = false;

  public openGuide() {
    this.#dialog.open({
      content: HostGuideSidepanelComponent,
      mode: 'drawer',
      size: 'S',
    });
  }
}
