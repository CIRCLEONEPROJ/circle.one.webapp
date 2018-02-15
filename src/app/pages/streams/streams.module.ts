import { NgModule } from '@angular/core';
import { StreamsComponent } from './streams.component';
import { SharedModule } from '../../shared/shared.module';
import { StreamItemComponent } from './stream-item/stream-item.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [StreamsComponent, StreamItemComponent]
})
export class StreamsModule { }
