import { Component } from '@angular/core';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';

@Component({
  selector: 'lbnb-admin-page',
  imports: [MainLayoutBlockComponent, MainLayoutComponent, PageHeaderComponent],
  templateUrl: './admin.page.html',
  styleUrl: './admin.page.scss',
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class AdminPage {}
