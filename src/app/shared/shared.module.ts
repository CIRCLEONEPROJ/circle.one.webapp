import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatTableModule,
  MatTabsModule
} from '@angular/material';
import { ChartComponent } from './components/chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    ChartsModule,
    MatMenuModule
  ],
  declarations: [ChartComponent, ModalComponent],
  exports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    ChartComponent,
    ChartsModule,
    MatMenuModule
  ],
  providers: [DatePipe]
})
export class SharedModule {
}
