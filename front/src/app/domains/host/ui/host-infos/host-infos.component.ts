import { Component, inject } from '@angular/core';
import { AppStore } from '@app/shared/data/stores/app.store';
import { InfoComponent } from '@app/shared/ui/info/info.component';
import { ButtonComponent } from '@lucca-front/ng/button';
import { EmptyStateSectionComponent } from '@lucca-front/ng/empty-state';
import { LinkComponent } from '@lucca-front/ng/link';

@Component({
  selector: 'lbnb-host-infos',
  imports: [InfoComponent, EmptyStateSectionComponent, ButtonComponent, LinkComponent],
  templateUrl: './host-infos.component.html',
  styleUrl: './host-infos.component.scss',
})
export class HostInfosComponent {
  readonly store = inject(AppStore);
}
