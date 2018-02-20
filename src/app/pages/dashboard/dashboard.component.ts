import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { StreamService } from '../../core/services/stream.service';
import { ITransaction, PurchaseService } from '../../core/services/purchase.service';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { AuthService, IUser } from '../../core/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { ProveContractService } from '../../ethereum/services/prove-contract.service';
import { TransactionInfoDialogComponent } from '../../shared/components/transaction-info-dialog/transaction-info-dialog.component';
import { PurchaseContractService } from '../../ethereum/services/purchase-contract.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit, OnDestroy {

  displayedCols = [ 'id', 'name', 'date', 'price', 'hash' ];
  dataSource = new MatTableDataSource();
  user$: Observable<IUser>;
  circleTokens: number;
  contractLink = '';
  private sub: Subscription;

  constructor( private svc: StreamService,
               private authService: AuthService,
               private purchaseService: PurchaseService,
               private proveContractService: ProveContractService,
               private purchaseContractService: PurchaseContractService,
               private dialogService: MatDialog ) {
  }

  public balance: number;

  async ngOnInit() {
    this.contractLink = this.purchaseContractService.etherscanLink;
    try {
      this.circleTokens = await this.proveContractService.getBalance();
    } catch ( err ) {
      console.log(err);
    }
    this.user$ = this.authService.user;
    this.sub = this.purchaseService.transactions
      .pipe(tap(( transactions: ITransaction[] ) => {
        console.log(transactions);
        this.dataSource.data = transactions;
      }))
      .subscribe();
    // this.svc.getStreams().subscribe(data => {
    //   this.dataSource.data = data.slice(0, 5);
    // });
    // this.cs.getUserBalance().then(balance => this.balance = balance);
  }

  ngOnDestroy() {
    if ( this.sub ) {
      this.sub.unsubscribe();
    }
  }

  showTransactionInfo( transaction: ITransaction ) {
    this.dialogService.open(TransactionInfoDialogComponent, {
      data: transaction
    });
  }
}
