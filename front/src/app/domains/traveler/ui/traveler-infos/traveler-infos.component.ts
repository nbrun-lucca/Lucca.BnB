import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { StatusBadgeComponent } from '@lucca-front/ng/statusBadge';

@Component({
  selector: 'lbnb-traveler-infos',
  imports: [NgOptimizedImage, StatusBadgeComponent],
  templateUrl: './traveler-infos.component.html',
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TravelerInfosComponent {}
