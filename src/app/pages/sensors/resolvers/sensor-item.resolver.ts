import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SensorService } from '../../../core/services/sensor.service';

@Injectable()
export class SensorItemResolver implements Resolve<any> {
  constructor(private sensorService: SensorService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.sensorService.getItem(parseInt(route.params.sensorId, 10));
  }
}
