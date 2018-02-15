import { NgModule } from '@angular/core';
import { StreamsModule } from './streams/streams.module';
import { DatasetsModule } from './datasets/datasets.module';
import { SensorsModule } from './sensors/sensors.module';

@NgModule({
  imports: [
    StreamsModule,
    DatasetsModule,
    SensorsModule
  ],
    declarations: []
})
export class PagesModule { }
