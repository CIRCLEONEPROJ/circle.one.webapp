import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PurchaseService } from '../../../core/services/purchase.service';
import { AuthService, IUser } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase-dialog',
  templateUrl: './purchase-dialog.component.html',
  styleUrls: [ './purchase-dialog.component.scss' ]
})
export class PurchaseDialogComponent implements OnInit {
  loading: boolean;
  item: any;
  user: IUser;
  balance: string;
  form: FormGroup;
  now = new Date();
  messageError: string;

  constructor( private dialogRef: MatDialogRef<PurchaseDialogComponent>,
               private authService: AuthService,
               @Inject(MAT_DIALOG_DATA) public data: any,
               private purchaseService: PurchaseService,
               private fb: FormBuilder ) {
  }

  ngOnInit() {
    this.createForm();
    this.item = this.data.item;
    this.balance = this.data.balance;
    this.authService.user.subscribe(( user ) => this.user = user);
  }

  get balanceClasses(): any {
    return {
      'text-success': this.user.circleTokens >= this.item.price,
      'text-danger': this.user.circleTokens < this.item.price
    };
  }

  async purchase() {
    this.messageError = null;
    if ( this.form.invalid ) {
      return;
    }
    this.loading = true;
    try {
      const transaction = await this.purchaseService.makePurchase(this.item);
      console.log(transaction);
      this.dialogRef.close({ data: transaction });
    } catch ( err ) {
      console.dir(err);
      this.messageError = 'Error';

    }
    this.loading = false;
  }


  cancel() {
    this.dialogRef.close();
  }

  get dateStart() {
    return this.form.get('dateStart');
  }

  get dateEnd() {
    return this.form.get('dateEnd');
  }

  private createForm() {
    this.form = this.fb.group({
      dateStart: [ null, [ Validators.required ] ],
      dateEnd: [ null, [ Validators.required ] ]
    });

  }

}
