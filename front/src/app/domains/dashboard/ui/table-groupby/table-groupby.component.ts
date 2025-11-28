import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  DataTableBodyComponent,
  DataTableComponent,
  DataTableHeadComponent,
  DataTableRowCellComponent,
  DataTableRowCellHeaderComponent,
  DataTableRowComponent,
} from '@lucca-front/ng/data-table';
import { EmptyStateSectionComponent } from '@lucca-front/ng/empty-state';
import { FormFieldComponent } from '@lucca-front/ng/form-field';
import { TextInputComponent } from '@lucca-front/ng/forms';
import { IconComponent } from '@lucca-front/ng/icon';
import { SkeletonDataTableComponent } from '@lucca-front/ng/skeleton';

@Component({
  selector: 'lbnb-table-groupby',
  imports: [
    FormsModule,
    FormFieldComponent,
    TextInputComponent,
    SkeletonDataTableComponent,
    EmptyStateSectionComponent,
    DataTableBodyComponent,
    DataTableComponent,
    DataTableHeadComponent,
    DataTableRowCellComponent,
    DataTableRowCellHeaderComponent,
    DataTableRowComponent,
    IconComponent,
  ],
  templateUrl: './table-groupby.component.html',
})
export class TableGroupByComponent {
  public isLoading = false;

  public code = null;

  public dataGroups = [
    {
      name: 'TVA',
      data: [
        'Taux normal (20 %)',
        'Taux intermédiaire (10 %)',
        'Taux réduit (5,5 %)',
        'Taux particulier (2,1 %)',
        'TVA exonérée (0 %)',
      ],
      isExpanded: true,
    },
    {
      name: 'Type de contrat',
      data: ['Contrat A', 'Contrat B', 'Contrat C'],
      isExpanded: false,
    },
    {
      name: 'CSP',
      data: ['CSP A', 'CSP B', 'CSP C'],
      isExpanded: false,
    },
    {
      name: 'Code établissement',
      data: ['Code A', 'Code B', 'Code C'],
      isExpanded: false,
    },
    {
      name: 'Départements',
      data: ['Département A', 'Département B', 'Département C'],
      isExpanded: false,
    },
  ];
}
