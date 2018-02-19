import { Component, OnInit } from '@angular/core';
import { SensorService } from '../../core/services/sensor.service';
import { StreamService } from '../../core/services/stream.service';
import { DatasetService } from '../../core/services/dataset.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  sensorItems;
  streamItems;
  datasetItems;

  constructor( private sensorService: SensorService,
               private streamService: StreamService,
               private datasetService: DatasetService ) {
  }

  ngOnInit() {
    this.sensorService.getData().subscribe(res => {
      // console.log(res);
      this.sensorItems = res;
    });
    this.streamService.getStreams().subscribe(res => {
      this.streamItems = res;
    });
    this.datasetService.getData().subscribe(res => {
      this.datasetItems = res;
    });
  }

}
