import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PurchaseDialogComponent } from '../purchase-dialog/purchase-dialog.component';

@Component({
  selector: 'app-dataset-info-dialog',
  templateUrl: './dataset-info-dialog.component.html',
  styleUrls: [ './dataset-info-dialog.component.scss' ]
})
export class DatasetInfoDialogComponent implements OnInit {
  item: any;

  constructor( private dialogRef: MatDialogRef<PurchaseDialogComponent>,
               @Inject(MAT_DIALOG_DATA) private data: any ) {
  }

  ngOnInit() {
    this.item = this.data.data.item;
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
