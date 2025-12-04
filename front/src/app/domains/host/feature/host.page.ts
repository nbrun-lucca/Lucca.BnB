import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonComponent } from '@lucca-front/ng/button';
import { CalloutComponent } from '@lucca-front/ng/callout';
import { CalloutActionsComponent } from '@lucca-front/ng/callout';
import { LuDialogService } from '@lucca-front/ng/dialog';
import { EmptyStateSectionComponent } from '@lucca-front/ng/empty-state';
import { IconComponent } from '@lucca-front/ng/icon';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';
import { StatusBadgeComponent } from '@lucca-front/ng/statusBadge';

import { HostGuideSidepanelComponent } from '../ui/host-guide-sidepanel/host-guide-sidepanel.component';

@Component({
  selector: 'lbnb-host-page',
  imports: [
    NgOptimizedImage,
    MainLayoutBlockComponent,
    MainLayoutComponent,
    PageHeaderComponent,
    EmptyStateSectionComponent,
    CalloutComponent,
    CalloutActionsComponent,
    StatusBadgeComponent,
    ButtonComponent,
    IconComponent,
  ],
  templateUrl: './host.page.html',
})
export default class HostPage {
  readonly #dialog = inject(LuDialogService);

  hasShelter = true;

  public openGuide() {
    this.#dialog.open({
      content: HostGuideSidepanelComponent,
      mode: 'drawer',
      size: 'S',
    });
  }
}
