import { Component } from '@angular/core';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';

@Component({
  selector: 'lbnb-dashboard-page',
  imports: [MainLayoutBlockComponent, MainLayoutComponent, PageHeaderComponent],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class DashboardPage {}
