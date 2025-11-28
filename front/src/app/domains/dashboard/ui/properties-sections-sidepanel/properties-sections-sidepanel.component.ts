import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '@lucca-front/ng/button';
import {
  DialogComponent,
  DialogContentComponent,
  DialogDismissDirective,
  DialogFooterComponent,
  DialogHeaderComponent,
} from '@lucca-front/ng/dialog';
import { FormFieldComponent } from '@lucca-front/ng/form-field';
import { TextInputComponent } from '@lucca-front/ng/forms';
import { IconComponent } from '@lucca-front/ng/icon';
import { LuTooltipTriggerDirective } from '@lucca-front/ng/tooltip';

@Component({
  selector: 'lbnb-properties-sections-sidepanel',
  imports: [
    FormsModule,
    DialogComponent,
    DialogHeaderComponent,
    DialogContentComponent,
    DialogFooterComponent,
    DialogDismissDirective,
    LuTooltipTriggerDirective,
    FormFieldComponent,
    TextInputComponent,
    ButtonComponent,
    IconComponent,
  ],
  templateUrl: './properties-sections-sidepanel.component.html',
})
export class PropertiesSectionsSidepanelComponent {
  public code = '';
}
