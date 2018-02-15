import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DatasetItemComponent } from './dataset-item/dataset-item.component';
import { DatasetsComponent } from './datasets.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [DatasetItemComponent, DatasetsComponent]
})
export class DatasetsModule { }
