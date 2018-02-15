import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stream-item',
  templateUrl: './stream-item.component.html',
  styleUrls: ['./stream-item.component.scss']
})
export class StreamItemComponent implements OnInit {
  stream;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data);
      return this.stream = data.stream;
    });
  }

}
