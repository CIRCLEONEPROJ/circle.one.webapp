import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems = [
    {name: 'Streams', href: '/streams', icon: 'router'},
    {name: 'Datasets', href: '/datasets', icon: 'cast_connected'},
    {name: 'Sensors', href: '/sensors', icon: 'settings_remote'},
    {name: 'Dashboard', href: '/dashboard', icon: 'dashboard'}
  ];

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

  constructor() {
  }

  ngOnInit() {
    this.someMethod();
  }

}
