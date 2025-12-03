import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  selector: 'lbnb-journey-guide-sidepanel',
  imports: [
    FormsModule,
    DialogComponent,
    DialogHeaderComponent,
    DialogContentComponent,
    DialogFooterComponent,
    DialogDismissDirective,
    BoxComponent,
    ButtonComponent,
  ],
  templateUrl: './journey-guide-sidepanel.component.html',
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class JourneyGuideSidepanelComponent {}
