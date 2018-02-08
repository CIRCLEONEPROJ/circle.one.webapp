import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorsComponent } from './pages/sensors/sensors.component';
import { StreamsComponent } from './pages/streams/streams.component';
import { DatasetsComponent } from './pages/datasets/datasets.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'sensors', component: SensorsComponent},
  {path: 'streams', component: StreamsComponent},
  {path: 'datasets', component: DatasetsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
