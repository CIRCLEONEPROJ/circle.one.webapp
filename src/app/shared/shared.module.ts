import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule,
  MatTabsModule
} from '@angular/material';
import { ChartComponent } from './components/chart/chart.component';
import { ChartsModule } from 'ng2-charts';

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
    ChartsModule
  ],
  declarations: [ChartComponent],
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
    ChartsModule
  ],
  providers: [DatePipe]
})
export class SharedModule {
}
