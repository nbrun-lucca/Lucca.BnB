import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { StatusBadgeComponent } from '@lucca-front/ng/statusBadge';

@Component({
  selector: 'lbnb-host-infos',
  imports: [NgOptimizedImage, StatusBadgeComponent],
  templateUrl: './host-infos.component.html',
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class HostInfosComponent {}
