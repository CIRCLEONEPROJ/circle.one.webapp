import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { StreamsComponent } from './pages/streams/streams.component';
import { DatasetsComponent } from './pages/datasets/datasets.component';
import { SensorsComponent } from './pages/sensors/sensors.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { CarouselComponent } from './shared/components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    BannerComponent,
    StreamsComponent,
    DatasetsComponent,
    SensorsComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
