import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { ChartComponent } from './components/chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { ModalComponent } from './components/modal/modal.component';
import { PurchaseDialogComponent } from './components/purchase-dialog/purchase-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatasetInfoDialogComponent } from './components/dataset-info-dialog/dataset-info-dialog.component';
import { TransactionInfoDialogComponent } from './components/transaction-info-dialog/transaction-info-dialog.component';


const matModules = [
  CommonModule,
  ReactiveFormsModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatTabsModule,
  MatIconModule,
  ChartsModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  imports: [
    ...matModules
  ],
  declarations: [ ChartComponent, ModalComponent, PurchaseDialogComponent, DatasetInfoDialogComponent, TransactionInfoDialogComponent ],
  exports: [
    ...matModules,
    ChartComponent,
    PurchaseDialogComponent,
    DatasetInfoDialogComponent
  ],
  providers: [ DatePipe ],
  entryComponents: [
    PurchaseDialogComponent,
    DatasetInfoDialogComponent,
    TransactionInfoDialogComponent
  ]
})
export class SharedModule {
}
