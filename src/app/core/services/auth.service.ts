import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'ngx-webstorage';

export interface IUser {
  name: string;
  email: string;
  qtumTokens: number;
  circleTokens: number;
}

@Injectable()
export class AuthService {
  private key = 'user';
  private _user = new BehaviorSubject<IUser>(null);

  constructor( private storageService: LocalStorageService ) {
    this.init();
  }

  get user(): Observable<IUser> {
    return this._user.asObservable();
  }

  update( user: IUser ) {
    console.log(user);
    this.storageService.store(this.key, user);
    this._user.next(user);
  }

  private init() {
    const storedData = this.storageService.retrieve(this.key);
    if ( !storedData || typeof storedData !== 'object' ) {
      const user: IUser = {
        name: 'Test User',
        email: 'test@mail.com',
        qtumTokens: 200,
        circleTokens: 1000
      };
      this.storageService.store(this.key, user);
      this._user.next(user);
    } else {
      this._user.next(storedData);
    }
  }

}
