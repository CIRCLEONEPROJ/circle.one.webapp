import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PurchaseDialogComponent } from '../../../shared/components/purchase-dialog/purchase-dialog.component';
import { DatasetInfoDialogComponent } from '../../../shared/components/dataset-info-dialog/dataset-info-dialog.component';

@Component({
  selector: 'app-dataset-item',
  templateUrl: './dataset-item.component.html',
  styleUrls: [ './dataset-item.component.scss' ]
})
export class DatasetItemComponent implements OnInit {
  dataset;

  constructor( private route: ActivatedRoute,
               private dialogService: MatDialog ) {
  }

  ngOnInit() {
    this.route.data.subscribe(( data ) => {
      console.log(data);
      return this.dataset = data.dataset;
    });
  }

  showPurchaseDialog( item ) {
    const dialogRef = this.dialogService.open(PurchaseDialogComponent, {
      data: { item },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(( data ) => {
      if ( data ) {
        this.dialogService.open(DatasetInfoDialogComponent, {
          data
        });
      }
    });
  }

}
