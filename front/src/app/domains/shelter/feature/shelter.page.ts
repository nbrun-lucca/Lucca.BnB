import { Component, inject } from '@angular/core';
import { ButtonComponent } from '@lucca-front/ng/button';
import { LuDialogService } from '@lucca-front/ng/dialog';
import { IconComponent } from '@lucca-front/ng/icon';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';

import { ShelterGuideSidepanelComponent } from '../ui/shelter-guide-sidepanel/shelter-guide-sidepanel.component';

@Component({
  selector: 'lbnb-shelter-page',
  imports: [MainLayoutBlockComponent, MainLayoutComponent, PageHeaderComponent, ButtonComponent, IconComponent],
  templateUrl: './shelter.page.html',
  styleUrl: './shelter.page.scss',
})
export default class ShelterPage {
  readonly #dialog = inject(LuDialogService);

  public openGuide() {
    this.#dialog.open({
      content: ShelterGuideSidepanelComponent,
      mode: 'drawer',
      size: 'S',
    });
  }
}
