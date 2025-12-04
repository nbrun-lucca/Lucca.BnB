import { Component, inject } from '@angular/core';
import { AppStore } from '@app/shared/data/stores/app.store';
import { ButtonComponent } from '@lucca-front/ng/button';
import { LuDialogService } from '@lucca-front/ng/dialog';
import {
  LuDropdownTriggerDirective,
  DropdownMenuComponent,
  DropdownItemComponent,
  DropdownActionComponent,
} from '@lucca-front/ng/dropdown';
import { EmptyStateSectionComponent } from '@lucca-front/ng/empty-state';
import { IconComponent } from '@lucca-front/ng/icon';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';
import { LuTooltipTriggerDirective } from '@lucca-front/ng/tooltip';

import { HostDeactivationDialogComponent } from '../ui/host-deactivation-dialog/host-deactivation-dialog.component';
import { HostGuideSidepanelComponent } from '../ui/host-guide-sidepanel/host-guide-sidepanel.component';
import { HostInfosComponent } from '../ui/host-infos/host-infos.component';

@Component({
  selector: 'lbnb-host-page',
  imports: [
    MainLayoutBlockComponent,
    MainLayoutComponent,
    PageHeaderComponent,
    EmptyStateSectionComponent,
    LuDropdownTriggerDirective,
    DropdownMenuComponent,
    DropdownItemComponent,
    DropdownActionComponent,
    LuTooltipTriggerDirective,
    HostInfosComponent,
    ButtonComponent,
    IconComponent,
  ],
  templateUrl: './host.page.html',
})
export default class HostPage {
  readonly store = inject(AppStore);
  readonly #dialog = inject(LuDialogService);

  hasShelter = false;

  public openGuide() {
    this.#dialog.open({
      content: HostGuideSidepanelComponent,
      mode: 'drawer',
      size: 'S',
    });
  }

  public deactivate() {
    this.#dialog.open({
      content: HostDeactivationDialogComponent,
      size: 'S',
    });
  }
}
