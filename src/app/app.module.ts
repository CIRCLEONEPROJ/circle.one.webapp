import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { SensorService } from './core/services/sensor.service';
import { KeyValueFilterPipe } from './core/pipes/key-value-filter.pipe';
import { HomeComponent } from './pages/home/home.component';
import { StreamService } from './core/services/stream.service';
import { FormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DatasetService } from './core/services/dataset.service';
import { CarouselModule } from './shared/components/carousel/carousel.module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { ItemRedirectComponent } from './core/route/item-redirect/item-redirect.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    CarouselComponent,
    KeyValueFilterPipe,
    HomeComponent,
    ItemRedirectComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    PagesModule,
    BrowserAnimationsModule,
    SharedModule,
    Ng2CarouselamosModule,
    Angular2FontawesomeModule

  ],
  providers: [SensorService, StreamService, DatasetService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
