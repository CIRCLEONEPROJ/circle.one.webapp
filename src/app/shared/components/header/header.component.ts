import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu = [
    {name: 'Streams', href: '/streams'},
    {name: 'Datasets', href: '/datasets'},
    {name: 'Sensors', href: '/sensors'},
    {name: 'Dashboard', href: '/dashboard'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
