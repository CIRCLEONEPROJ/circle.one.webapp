import { Component, OnInit } from '@angular/core';
import { SensorService } from '../../core/services/sensor.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})

export class SensorsComponent implements OnInit {
  constructor(private sensorService: SensorService) {
  }

  content = [];

  ngOnInit() {
    this.sensorService.getData().subscribe(data => {
      this.content = data;
    });
  }
}
