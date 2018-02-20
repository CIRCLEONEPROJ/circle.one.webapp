import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { AuthService, IUser } from '../../../core/services/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  user$: Observable<IUser>;
  menuItems = [
    { name: 'Streams', href: '/streams', icon: 'router' },
    { name: 'Datasets', href: '/datasets', icon: 'cast_connected' },
    { name: 'Sensors', href: '/sensors', icon: 'settings_remote' },
    { name: 'Dashboard', href: '/dashboard', icon: 'dashboard' }
  ];

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

  constructor( private authService: AuthService ) {
  }

  ngOnInit() {
    this.user$ = this.authService.user;
    // this.someMethod();
  }

}
