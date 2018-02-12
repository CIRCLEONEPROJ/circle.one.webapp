import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { DatasetsComponent } from './pages/datasets/datasets.component';
import { SensorsComponent } from './pages/sensors/sensors.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { SensorService } from './core/services/sensor.service';
import { KeyValueFilterPipe } from './core/pipes/key-value-filter.pipe';
import { HomeComponent } from './pages/home/home.component';
import { StreamService } from './core/services/stream.service';
import { FormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    BannerComponent,
    DatasetsComponent,
    SensorsComponent,
    FooterComponent,
    CarouselComponent,
    KeyValueFilterPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    Ng2CarouselamosModule,
    FormsModule,
    PagesModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [SensorService, StreamService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
