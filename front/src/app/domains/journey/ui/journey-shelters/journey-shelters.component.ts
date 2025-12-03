import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DateRangeInputComponent } from '@lucca-front/ng/date2';
import { FilterBarComponent, FilterPillAddonBeforeDirective, FilterPillComponent } from '@lucca-front/ng/filter-pills';
import { LuSimpleSelectInputComponent } from '@lucca-front/ng/simple-select';

export const VIEW_TYPE = {
  MAP: 'map',
  LIST: 'list',
} as const;

export type ViewType = (typeof VIEW_TYPE)[keyof typeof VIEW_TYPE];

@Component({
  selector: 'lbnb-journey-shelters',
  imports: [
    FormsModule,
    FilterBarComponent,
    FilterPillAddonBeforeDirective,
    FilterPillComponent,
    LuSimpleSelectInputComponent,
    DateRangeInputComponent,
  ],
  templateUrl: './journey-shelters.component.html',
})
export class JourneySheltersComponent {
  readonly VIEW_TYPE = VIEW_TYPE;

  readonly view = model<ViewType>(this.VIEW_TYPE.MAP);
  readonly period = model<string | null>(null);
  readonly place = model<string | null>(null);
}
