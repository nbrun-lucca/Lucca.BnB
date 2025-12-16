import { NgOptimizedImage } from '@angular/common';
import { Component, inject, type OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppStore } from '@app/shared/data/stores/app.store';
import { ButtonComponent } from '@lucca-front/ng/button';
import { DividerComponent } from '@lucca-front/ng/divider';
import { FancyBoxComponent } from '@lucca-front/ng/fancy-box';
import { GridColumnComponent, GridComponent } from '@lucca-front/ng/grid';
import { HighlightDataComponent } from '@lucca-front/ng/highlight-data';
import { IconComponent } from '@lucca-front/ng/icon';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { NumericBadgeComponent } from '@lucca-front/ng/numeric-badge';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';

import type { DashboardCard } from '../data/dashboard-card';

import { DashboardCardComponent } from '../ui/dashboard-card/dashboard-card.component';

@Component({
  selector: 'lbnb-dashboard-page',
  imports: [
    MainLayoutBlockComponent,
    MainLayoutComponent,
    PageHeaderComponent,
    DashboardCardComponent,
    GridColumnComponent,
    GridComponent,
    DividerComponent,
    FancyBoxComponent,
    HighlightDataComponent,
    NumericBadgeComponent,
    ButtonComponent,
    IconComponent,
    RouterLink,
    NgOptimizedImage,
  ],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export default class DashboardPage implements OnInit {
  readonly store = inject(AppStore);

  cards: DashboardCard[] = [];
  hasNextJourney = true;
  hasNextWelcome = true;

  ngOnInit() {
    this.cards = [
      {
        icon: 'mapPlan',
        image: 'https://cartes.app/_next/image?url=%2Fblog-images%2Ffrance-google.png&w=3840&q=75',
        link: '/map',
        heading: 'Hébergements',
        description: 'Repérez rapidement les hébergements disponibles autour de votre destination.',
      },
      {
        icon: 'transportTrain',
        image:
          'https://media.istockphoto.com/id/1465916031/fr/photo/le-chemin-de-lavion.jpg?s=612x612&w=0&k=20&c=z9VJkarwdKyKzZJ4GJyRYQ08wLP3A6JJp8i3i5b-vgo=',
        link: '/traveler',
        heading: 'Voyageur',
        description: `Gérez vos informations et vos demandes d'hébergement pour se déplacer sereinement.`,
      },
    ];
    if (this.store.isHost()) {
      this.cards.push({
        icon: 'buildingHouseStarred',
        image:
          'https://tourisme-isleperigord.com/wp-content/uploads/tourisme/chambre-d-hotes-chez-kinou-neuvic--6--2.jpg',
        link: '/host',
        heading: 'Hôte',
        description: 'Proposez un hébergement et accueillez des voyageurs.',
      });
    }
  }
}
