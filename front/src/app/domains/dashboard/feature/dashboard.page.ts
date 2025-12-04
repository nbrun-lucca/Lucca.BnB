import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@lucca-front/ng/button';
import { DividerComponent } from '@lucca-front/ng/divider';
import { FancyBoxComponent } from '@lucca-front/ng/fancy-box';
import { IconComponent } from '@lucca-front/ng/icon';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { NumericBadgeComponent } from '@lucca-front/ng/numeric-badge';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';

@Component({
  selector: 'lbnb-dashboard-page',
  imports: [
    MainLayoutBlockComponent,
    MainLayoutComponent,
    PageHeaderComponent,
    FancyBoxComponent,
    NumericBadgeComponent,
    DividerComponent,
    ButtonComponent,
    IconComponent,
    RouterLink,
  ],
  templateUrl: './dashboard.page.html',
})
export default class DashboardPage {
  hasNextJourney = false;
  hasNextWelcome = false;
}
