import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sensor-item',
  templateUrl: './sensor-item.component.html',
  styleUrls: ['./sensor-item.component.scss']
})
export class SensorItemComponent implements OnInit {
  sensor;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data);
      return this.sensor = data.sensor;
    });
  }

}
