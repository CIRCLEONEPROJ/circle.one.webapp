import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class DatasetService {

  private sensorsHref = '/assets/data/datasets.json';

  constructor(private http: HttpClient) {
  }

  getData(): Observable<any> {
    return this.http.get<any[]>(this.sensorsHref);
  }
  getItem(id): Observable<any> {
    return this.getData()
      .pipe(map((data) => {
        const index = data.findIndex((item) => item.id === id);
        return index >= 0 ? data[index] : null;
      }));
  }
}
