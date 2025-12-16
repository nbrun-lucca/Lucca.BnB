import type { Palette, DecorativePalette } from '@lucca-front/ng/core';

import { Component, model, type OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormFieldComponent } from '@lucca-front/ng/form-field';
import { GridColumnComponent, GridComponent } from '@lucca-front/ng/grid';
import { IconComponent } from '@lucca-front/ng/icon';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';
import { SegmentedControlComponent, SegmentedControlFilterComponent } from '@lucca-front/ng/segmentedControl';
import { LuSimpleSelectInputComponent } from '@lucca-front/ng/simple-select';

import { AccommodationCardComponent } from '../ui/accommodation-card/accommodation-card.component';

export const VIEW_TYPE = {
  MAP: 'map',
  LIST: 'list',
} as const;

export type ViewType = (typeof VIEW_TYPE)[keyof typeof VIEW_TYPE];

@Component({
  selector: 'lbnb-accommodations-page',
  imports: [
    FormsModule,
    MainLayoutBlockComponent,
    MainLayoutComponent,
    PageHeaderComponent,
    SegmentedControlComponent,
    SegmentedControlFilterComponent,
    FormFieldComponent,
    LuSimpleSelectInputComponent,
    AccommodationCardComponent,
    GridColumnComponent,
    GridComponent,
    IconComponent,
  ],
  templateUrl: './accommodations.page.html',
  styleUrl: './accommodations.page.scss',
})
export default class AccommodationsPage implements OnInit {
  readonly VIEW_TYPE = VIEW_TYPE;

  readonly view = model<ViewType>();
  readonly period = model<string | null>(null);
  readonly place = model<string | null>(null);

  palettes: (Palette | DecorativePalette)[] = [
    'kiwi',
    'cucumber',
    'pineapple',
    'grape',
    'blueberry',
    'lavender',
    'glacier',
  ];

  ngOnInit() {
    this.view.set(this.VIEW_TYPE.LIST);
  }
}
