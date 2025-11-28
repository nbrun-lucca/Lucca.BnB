import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '@lucca-front/ng/button';
import {
  DialogComponent,
  DialogContentComponent,
  DialogDismissDirective,
  DialogFooterComponent,
  DialogHeaderComponent,
  LuDialogService,
} from '@lucca-front/ng/dialog';
import {
  LuDropdownTriggerDirective,
  DropdownMenuComponent,
  DropdownItemComponent,
  DropdownActionComponent,
} from '@lucca-front/ng/dropdown';
import { FormFieldComponent } from '@lucca-front/ng/form-field';
import { TextInputComponent } from '@lucca-front/ng/forms';
import { IconComponent } from '@lucca-front/ng/icon';
import { LuTooltipTriggerDirective } from '@lucca-front/ng/tooltip';

import { PropertiesSectionsSidepanelComponent } from '../properties-sections-sidepanel/properties-sections-sidepanel.component';

@Component({
  selector: 'lbnb-codes-sections-sidepanel',
  imports: [
    FormsModule,
    DialogComponent,
    DialogHeaderComponent,
    DialogContentComponent,
    DialogFooterComponent,
    DialogDismissDirective,
    LuDropdownTriggerDirective,
    DropdownMenuComponent,
    DropdownItemComponent,
    DropdownActionComponent,
    ButtonComponent,
    LuTooltipTriggerDirective,
    FormFieldComponent,
    TextInputComponent,
    IconComponent,
    ButtonComponent,
  ],
  templateUrl: './codes-sections-sidepanel.component.html',
})
export class CodesSectionsSidepanelComponent {
  readonly #dialog = inject(LuDialogService);

  public code = '';

  public handleProperties() {
    this.#dialog.open({
      content: PropertiesSectionsSidepanelComponent,
      mode: 'drawer',
      size: 'XS',
    });
  }
}
