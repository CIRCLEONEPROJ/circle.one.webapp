import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorsComponent } from './pages/sensors/sensors.component';
import { SensorItemComponent } from './pages/sensors/sensor-item/sensor-item.component';
import { StreamsComponent } from './pages/streams/streams.component';
import { DatasetsComponent } from './pages/datasets/datasets.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { DatasetItemComponent } from './pages/datasets/dataset-item/dataset-item.component';
import { StreamItemComponent } from './pages/streams/stream-item/stream-item.component';
import { SensorItemResolver } from './pages/sensors/resolvers/sensor-item.resolver';
import { DatasetItemResolver } from './pages/datasets/resolvers/dataset-item.resolver';
import { StreamItemResolver } from './pages/streams/resolvers/stream-item.resolver';

const routes: Routes = [
  {path: 'sensors', component: SensorsComponent},
  {
    path: 'sensors/:sensorId',
    component: SensorItemComponent,
    resolve: {
      sensor: SensorItemResolver
    }
  },
  {path: 'streams', component: StreamsComponent},
  {
    path: 'streams/:streamId',
    component: StreamItemComponent,
    resolve: {
      stream: StreamItemResolver
    }
  },
  {path: 'datasets', component: DatasetsComponent},
  {
    path: 'datasets/:datasetId',
    component: DatasetItemComponent,
    resolve: {
      dataset: DatasetItemResolver
    }
  },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  declarations: [],
  providers: [SensorItemResolver, DatasetItemResolver, StreamItemResolver]
})
export class AppRoutingModule {
}
