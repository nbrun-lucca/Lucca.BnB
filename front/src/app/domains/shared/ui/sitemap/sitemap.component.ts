import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AppStore } from '../../data/stores/app.store';

@Component({
  selector: 'lbnb-sitemap',
  imports: [RouterLink],
  templateUrl: './sitemap.component.html',
})
export class SitemapComponent {
  readonly store = inject(AppStore);
  readonly #router = inject(Router);

  readonly isRouteActive: (route: string) => boolean;

  showMenu = false;
  isLoading = false;

  public constructor() {
    this.isRouteActive = (route) =>
      this.#router.isActive(route, {
        paths: 'subset',
        queryParams: 'subset',
        fragment: 'ignored',
        matrixParams: 'ignored',
      });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
