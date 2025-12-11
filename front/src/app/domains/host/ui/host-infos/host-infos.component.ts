import { Component, inject } from '@angular/core';
import { AppStore } from '@app/shared/data/stores/app.store';
import { ButtonComponent } from '@lucca-front/ng/button';
import { EmptyStateSectionComponent } from '@lucca-front/ng/empty-state';

@Component({
  selector: 'lbnb-host-infos',
  imports: [EmptyStateSectionComponent, ButtonComponent],
  templateUrl: './host-infos.component.html',
  styleUrl: './host-infos.component.scss',
})
export class HostInfosComponent {
  readonly store = inject(AppStore);
}
