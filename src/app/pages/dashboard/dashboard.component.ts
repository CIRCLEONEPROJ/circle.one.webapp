import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { StreamService } from '../../core/services/stream.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedCols = ['name', 'type', 'date', 'frequency', 'price'];
  dataSource = new MatTableDataSource();

  constructor(private svc: StreamService) {
  }

  ngOnInit() {
    this.svc.getStreams().subscribe(data => {
      this.dataSource.data = data.slice(0, 5);
    });
  }
}
