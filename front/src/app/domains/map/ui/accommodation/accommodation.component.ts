import type { DecorativePalette, Palette } from '@lucca-front/ng/core';

import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { TagComponent } from '@lucca-front/ng/tag';

import { BubblesLeftComponent } from '../bubbles-left/bubbles-left.component';
import { BubblesRightComponent } from '../bubbles-right/bubbles-right.component';

@Component({
  selector: 'lbnb-accommodation',
  imports: [NgOptimizedImage, TagComponent, BubblesLeftComponent, BubblesRightComponent],
  templateUrl: './accommodation.component.html',
  styleUrl: './accommodation.component.scss',
})
export class AccommodationComponent {
  readonly hasPhoto = input<boolean>();
  readonly palette = input.required<Palette | DecorativePalette>();

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
