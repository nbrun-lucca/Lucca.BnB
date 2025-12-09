import { Component, inject } from '@angular/core';
import { AppStore } from '@app/shared/data/stores/app.store';
import { ButtonComponent } from '@lucca-front/ng/button';
import { EmptyStateSectionComponent } from '@lucca-front/ng/empty-state';
import { LinkComponent } from '@lucca-front/ng/link';
import { LuUserDisplayModule, LuUserTileComponent } from '@lucca-front/ng/user';

@Component({
  selector: 'lbnb-traveler-infos',
  imports: [EmptyStateSectionComponent, LuUserDisplayModule, LuUserTileComponent, LinkComponent, ButtonComponent],
  templateUrl: './traveler-infos.component.html',
  styleUrl: './traveler-infos.component.scss',
})
export class TravelerInfosComponent {
  readonly store = inject(AppStore);
}
