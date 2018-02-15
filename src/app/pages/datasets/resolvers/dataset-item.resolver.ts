import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DatasetService } from '../../../core/services/dataset.service';

@Injectable()
export class DatasetItemResolver implements Resolve<any> {
  constructor(private datasetService: DatasetService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.datasetService.getItem(parseInt(route.params.datasetId, 10));
  }
}
