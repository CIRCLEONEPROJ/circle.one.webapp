import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { StreamService } from '../../core/services/stream.service';
import { ContractsService } from '../../core/services/contracts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedCols = ['name', 'type', 'date', 'frequency', 'price'];
  dataSource = new MatTableDataSource();

  constructor(private svc: StreamService, private cs: ContractsService) {
  }

  public balance: number;

  ngOnInit() {
    this.svc.getStreams().subscribe(data => {
      this.dataSource.data = data.slice(0, 5);
    });
    this.cs.getUserBalance().then(balance => this.balance = balance);
  }
}
