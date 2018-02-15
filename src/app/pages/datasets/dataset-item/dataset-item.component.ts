import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dataset-item',
  templateUrl: './dataset-item.component.html',
  styleUrls: ['./dataset-item.component.scss']
})
export class DatasetItemComponent implements OnInit {
  dataset;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data);
      return this.dataset = data.dataset;
    });
  }

}
