import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PurchaseDialogComponent } from '../purchase-dialog/purchase-dialog.component';

@Component({
  selector: 'app-transaction-info-dialog',
  templateUrl: './transaction-info-dialog.component.html',
  styleUrls: [ './transaction-info-dialog.component.scss' ]
})
export class TransactionInfoDialogComponent implements OnInit {
  transaction: IDBTransaction;

  constructor( private dialogRef: MatDialogRef<PurchaseDialogComponent>,
               @Inject(MAT_DIALOG_DATA) private data: any ) {
  }

  ngOnInit() {
    this.transaction = this.data;
  }

}
