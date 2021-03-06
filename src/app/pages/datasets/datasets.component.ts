import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DatasetService } from '../../core/services/dataset.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss']
})

export class DatasetsComponent implements OnInit {

  displayedColumns = ['name', 'type', 'verified', 'frequency', 'price/hour'];
  dataSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private svc: DatasetService, private router: Router) { }

  ngOnInit() {
    this.svc.getData().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  goToItem(row) {
    this.router.navigate(['/datasets', row.id]);
  }

}
