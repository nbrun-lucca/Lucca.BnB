import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormFieldComponent } from '@lucca-front/ng/form-field';
import { IconComponent } from '@lucca-front/ng/icon';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';
import { SegmentedControlComponent, SegmentedControlFilterComponent } from '@lucca-front/ng/segmentedControl';
import { LuSimpleSelectInputComponent } from '@lucca-front/ng/simple-select';

import { MapSheltersComponent, VIEW_TYPE, type ViewType } from '../ui/map-shelters/map-shelters.component';

@Component({
  selector: 'lbnb-map-page',
  imports: [
    FormsModule,
    MainLayoutBlockComponent,
    MainLayoutComponent,
    PageHeaderComponent,
    SegmentedControlComponent,
    SegmentedControlFilterComponent,
    FormFieldComponent,
    LuSimpleSelectInputComponent,
    MapSheltersComponent,
    IconComponent,
  ],
  templateUrl: './map.page.html',
})
export default class MapPage {
  readonly VIEW_TYPE = VIEW_TYPE;

  readonly view = model<ViewType>(this.VIEW_TYPE.LIST);
  readonly period = model<string | null>(null);
  readonly place = model<string | null>(null);
}
