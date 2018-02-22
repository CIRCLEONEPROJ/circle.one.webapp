import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PurchaseDialogComponent } from '../../../shared/components/purchase-dialog/purchase-dialog.component';
import { DatasetInfoDialogComponent } from '../../../shared/components/dataset-info-dialog/dataset-info-dialog.component';
import { ProveContractService } from '../../../ethereum/services/prove-contract.service';

@Component({
  selector: 'app-dataset-item',
  templateUrl: './dataset-item.component.html',
  styleUrls: [ './dataset-item.component.scss' ]
})
export class DatasetItemComponent implements OnInit {
  dataset;
  balance;

  constructor( private route: ActivatedRoute,
               private dialogService: MatDialog,
               private proveService: ProveContractService ) {
  }

  async ngOnInit() {
    this.route.data.subscribe(( data ) => {
      console.log(data);
      return this.dataset = data.dataset;
    });
    try {
      this.balance = await this.proveService.getBalance();
    } catch ( err ) {
      console.log(err);
      alert(err);
    }
  }

  showPurchaseDialog( item ) {
    const dialogRef = this.dialogService.open(PurchaseDialogComponent, {
      data: { item, balance: this.balance },
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
