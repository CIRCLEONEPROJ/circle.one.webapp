import { Component, OnInit } from '@angular/core';
import { SensorService } from '../../core/services/sensor.service';
import { StreamService } from '../../core/services/stream.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sensorItems;
  streamItems;

  constructor( private sensorService: SensorService, private streamService: StreamService) { }

  ngOnInit() {
    this.sensorService.getData().subscribe( res => {
      console.log(res);
      this.sensorItems = res;
    });
    this.streamService.getStreams().subscribe( res => {
      this.streamItems = res;
    });
  }

}
