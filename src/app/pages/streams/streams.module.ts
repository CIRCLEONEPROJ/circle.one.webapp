import { NgModule } from '@angular/core';
import { StreamsComponent } from './streams.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [ SharedModule ],
  declarations: [StreamsComponent],
  exports: []
})
export class StreamsModule { }
