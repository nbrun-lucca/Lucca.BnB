import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import SitemapComponent from '@app/shared/ui/sitemap/sitemap.component';
import { LuSkipLinksComponent } from '@lucca-front/ng/a11y';
import { AppLayoutComponent } from '@lucca-front/ng/app-layout';
import { AccessibilityNavComponent } from '@lucca/pay-sdk/components';

@Component({
  selector: 'lbnb-root',
  imports: [LuSkipLinksComponent, SitemapComponent, AccessibilityNavComponent, AppLayoutComponent, RouterOutlet],
  templateUrl: './app.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class App {}
