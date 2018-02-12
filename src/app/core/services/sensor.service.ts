import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class SensorService {

  private sensorsHref = '/assets/data/sensors.json';

  constructor(private http: HttpClient) {
  }

  getData(): Observable<any> {
    return this.http.get<any[]>(this.sensorsHref)
      .pipe(map((data) => {
        return data.map((item) => ({...item, name: item.info.name}));
      }));
  }
}


