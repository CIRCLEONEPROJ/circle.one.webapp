import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class StreamService {

  private streamsHref = '/assets/data/streams.json';

  constructor(private http: HttpClient) {
  }

  getStreams(): Observable<any[]> {
    return this.http.get<any[]>(this.streamsHref)
      .pipe(map((data) => {
        return data.map((object) => ({...object, name: object.containerId}));
      }));
  }

  getItem(id): Observable<any> {
    return this.getStreams()
      .pipe(map((data) => {
        const index = data.findIndex((item) => item.id === id);
        return index >= 0 ? data[index] : null;
      }));
  }
}
