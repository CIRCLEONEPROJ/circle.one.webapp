import { NgModule } from '@angular/core';
import { PurchaseService } from './services/purchase.service';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    AuthService,
    PurchaseService ]
})
export class CoreModule {
}
