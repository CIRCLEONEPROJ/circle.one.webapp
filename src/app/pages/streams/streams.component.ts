import { Component, OnInit } from '@angular/core';
import { StreamService } from '../../core/services/stream.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';



@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})

export class StreamsComponent implements OnInit {

  displayedColumns = ['name', 'type', 'verified', 'frequency', 'price/hour'];
  dataSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private svc: StreamService, private router: Router) {
  }

  ngOnInit() {
    this.svc.getStreams().subscribe(data => {
      this.dataSource.data = data;
    });
  }
  goToItem(row) {
    this.router.navigate(['/streams', row.id]);
  }
}
