import type { DashboardCard } from '@app/dashboard/data/dashboard-card';

import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@lucca-front/ng/icon';

@Component({
  selector: 'lbnb-dashboard-card',
  imports: [RouterLink, IconComponent],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss',
})
export class DashboardCardComponent {
  readonly card = input.required<DashboardCard>();
}
