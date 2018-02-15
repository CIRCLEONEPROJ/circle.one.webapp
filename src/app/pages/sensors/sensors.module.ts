import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SensorItemComponent } from './sensor-item/sensor-item.component';
import { SensorsComponent } from './sensors.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([]),
    SharedModule
  ],
  declarations: [SensorItemComponent, SensorsComponent]
})
export class SensorsModule { }
