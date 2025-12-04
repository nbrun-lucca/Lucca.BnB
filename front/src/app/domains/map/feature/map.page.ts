import { Component } from '@angular/core';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';

import { MapSheltersComponent } from '../ui/map-shelters/map-shelters.component';

@Component({
  selector: 'lbnb-map-page',
  imports: [MainLayoutBlockComponent, MainLayoutComponent, PageHeaderComponent, MapSheltersComponent],
  templateUrl: './map.page.html',
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class MapPage {}
