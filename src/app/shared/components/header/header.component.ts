import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu = [
    {name: 'Streams', href: '/streams', icon: 'router'},
    {name: 'Datasets', href: '/datasets', icon: 'cast_connected'},
    {name: 'Sensors', href: '/sensors', icon: 'settings_remote'},
    {name: 'Dashboard', href: '/dashboard', icon: 'dashboard'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
