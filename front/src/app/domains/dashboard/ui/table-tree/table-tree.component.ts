import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmptyStateSectionComponent } from '@lucca-front/ng/empty-state';
import { FormFieldComponent } from '@lucca-front/ng/form-field';
import { IconComponent } from '@lucca-front/ng/icon';
import { LuSimpleSelectInputComponent } from '@lucca-front/ng/simple-select';
import { SkeletonDataTableComponent } from '@lucca-front/ng/skeleton';

@Component({
  selector: 'lbnb-table-tree',
  imports: [
    FormsModule,
    FormFieldComponent,
    LuSimpleSelectInputComponent,
    SkeletonDataTableComponent,
    EmptyStateSectionComponent,
    IconComponent,
  ],
  templateUrl: './table-tree.component.html',
})
export class TableTreeComponent {
  public isLoading = false;

  public code = null;

  public dataTrees = [
    { label: 'Catégorie de frais A', value: null },
    {
      group: { label: 'Famille de frais B', value: null },
      data: [
        { label: 'Catégorie de frais BA', value: null },
        { label: 'Catégorie de frais BB', value: null },
        { label: 'Catégorie de frais BC', value: null },
      ],
      isExpanded: false,
    },
    { label: 'Catégorie de frais C', value: null },
    {
      group: { label: 'Famille de frais D', value: null },
      data: [
        { label: 'Catégorie de frais DA', value: null },
        { label: 'Catégorie de frais DB', value: null },
        { label: 'Catégorie de frais DC', value: null },
      ],
      isExpanded: true,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public toggleDataTree(dataTree: any) {
    dataTree.isExpanded = !dataTree.isExpanded;
  }
}
