import { Component, inject } from '@angular/core';
import { AppStore } from '@app/shared/data/stores/app.store';
import { InfoComponent } from '@app/shared/ui/info/info.component';
import { DividerComponent } from '@lucca-front/ng/divider';
import { GridColumnComponent, GridComponent } from '@lucca-front/ng/grid';
import { LinkComponent } from '@lucca-front/ng/link';

@Component({
  selector: 'lbnb-traveler-infos',
  imports: [InfoComponent, DividerComponent, GridColumnComponent, GridComponent, LinkComponent],
  templateUrl: './traveler-infos.component.html',
  styleUrl: './traveler-infos.component.scss',
})
export class TravelerInfosComponent {
  readonly store = inject(AppStore);
}
