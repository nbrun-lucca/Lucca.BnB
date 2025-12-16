import type { DecorativePalette, Palette } from '@lucca-front/ng/core';

import { NgOptimizedImage } from '@angular/common';
import { Component, model } from '@angular/core';
import { GridColumnComponent, GridComponent } from '@lucca-front/ng/grid';
import { TagComponent } from '@lucca-front/ng/tag';

import { MapBubbleLeftComponent } from '../map-bubble-left/map-bubble-left.component';
import { MapBubbleRightComponent } from '../map-bubble-right/map-bubble-right.component';

export const VIEW_TYPE = {
  MAP: 'map',
  LIST: 'list',
} as const;

export type ViewType = (typeof VIEW_TYPE)[keyof typeof VIEW_TYPE];

@Component({
  selector: 'lbnb-map-shelters',
  imports: [
    NgOptimizedImage,
    GridColumnComponent,
    GridComponent,
    TagComponent,
    MapBubbleLeftComponent,
    MapBubbleRightComponent,
  ],
  templateUrl: './map-shelters.component.html',
  styleUrl: './map-shelters.component.scss',
})
export class MapSheltersComponent {
  readonly VIEW_TYPE = VIEW_TYPE;

  readonly view = model<ViewType>(this.VIEW_TYPE.LIST);

  palettes: (Palette | DecorativePalette)[] = [
    'kiwi',
    'cucumber',
    'pineapple',
    'grape',
    'blueberry',
    'lavender',
    'glacier',
  ];
}
