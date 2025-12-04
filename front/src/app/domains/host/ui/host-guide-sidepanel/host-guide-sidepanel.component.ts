import { Component } from '@angular/core';
import { BoxComponent } from '@lucca-front/ng/box';
import { ButtonComponent } from '@lucca-front/ng/button';
import {
  DialogComponent,
  DialogContentComponent,
  DialogDismissDirective,
  DialogFooterComponent,
  DialogHeaderComponent,
} from '@lucca-front/ng/dialog';

@Component({
  selector: 'lbnb-host-guide-sidepanel',
  imports: [
    DialogComponent,
    DialogHeaderComponent,
    DialogContentComponent,
    DialogFooterComponent,
    DialogDismissDirective,
    BoxComponent,
    ButtonComponent,
  ],
  templateUrl: './host-guide-sidepanel.component.html',
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class HostGuideSidepanelComponent {}
