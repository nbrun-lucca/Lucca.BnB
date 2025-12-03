import { Component } from '@angular/core';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';

@Component({
  selector: 'lbnb-shelter-page',
  imports: [MainLayoutBlockComponent, MainLayoutComponent, PageHeaderComponent],
  templateUrl: './shelter.page.html',
  styleUrl: './shelter.page.scss',
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class ShelterPage {}
