import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SensorService } from '../../core/services/sensor.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: [
    './sensors.component.scss'
  ],
  encapsulation: ViewEncapsulation.Emulated,
})

export class SensorsComponent implements OnInit {

  constructor(private sensorService: SensorService) {
  }

  public content = [];

  ngOnInit() {
    this.sensorService.getData().subscribe(data => {
      this.content = data;
    });
  }
}
