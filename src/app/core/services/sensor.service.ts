import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class SensorsClass {
  id?: number;
  info?: object;
  img?: string;
}

@Injectable()
export class SensorService {

  private sensorsHref = '/assets/data/sensors.json';

  constructor( private http: HttpClient) {
    this.getData().subscribe(data => {
      // console.log(data);
    });
  }
  public getData(): Observable<any> {
    return this.http.get(this.sensorsHref);
  }
}


