import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { StreamService } from '../../../core/services/stream.service';

@Injectable()
export class StreamItemResolver implements Resolve<any> {
  constructor(private streamService: StreamService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.streamService.getItem(parseInt(route.params.streamId, 10));
  }
}
