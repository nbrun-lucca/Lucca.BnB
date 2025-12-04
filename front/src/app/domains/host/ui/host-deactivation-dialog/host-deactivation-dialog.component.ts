import { Component, inject } from '@angular/core';
import { AppStore } from '@app/shared/data/stores/app.store';
import { ButtonComponent } from '@lucca-front/ng/button';
import {
  DialogComponent,
  DialogHeaderComponent,
  DialogContentComponent,
  DialogFooterComponent,
  DialogDismissDirective,
  injectDialogRef,
} from '@lucca-front/ng/dialog';

@Component({
  selector: 'lbnb-host-deactivation-dialog',
  imports: [
    DialogComponent,
    DialogHeaderComponent,
    DialogContentComponent,
    DialogFooterComponent,
    DialogDismissDirective,
    ButtonComponent,
  ],
  templateUrl: './host-deactivation-dialog.component.html',
})
export class HostDeactivationDialogComponent {
  readonly store = inject(AppStore);
  public ref = injectDialogRef<boolean>();

  confirm() {
    this.store.toggleHosting();
    this.ref.close(true);
  }
}
