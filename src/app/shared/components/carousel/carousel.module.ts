import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2Carouselamos } from 'ng2-carouselamos/dist/components';
import { CarouselComponent } from './carousel.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2Carouselamos,
    CarouselComponent
  ],
  declarations: []
})
export class CarouselModule {}
