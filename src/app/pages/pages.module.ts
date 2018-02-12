import { NgModule } from '@angular/core';
import { StreamsModule } from './streams/streams.module';
import { DatasetsModule } from './datasets/datasets.module';

@NgModule({
  imports: [
    StreamsModule,
    DatasetsModule
  ],
    declarations: []
})
export class PagesModule { }
