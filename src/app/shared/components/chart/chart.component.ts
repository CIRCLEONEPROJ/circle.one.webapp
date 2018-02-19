import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: [ './chart.component.scss' ]
})
export class ChartComponent implements OnInit, OnDestroy {
  chartOptions = {
    responsive: true,
    animation: false
  };

  chartData = [
    { data: [ 10, 50, 5, 90, 40, 33, 50 ], label: 'Stream-value' }
  ];

  chartLabels: string[] = [];
  private intervalId;

  constructor( private datePipe: DatePipe ) {
  }

  ngOnInit() {
    this.chartLabels = this.genLabels();
    this.intervalId = setInterval(() => {
      const data = this.chartData[ 0 ].data;
      this.chartData = [ { ...this.chartData[ 0 ], data: this.genData(data) } ];
      this.genLabels(this.chartLabels);
      // console.log(this.chartLabels);
    }, 2000);

  }

  ngOnDestroy() {
    if ( this.intervalId ) {
      clearInterval(this.intervalId);
    }
  }

  private genData( data: number[] ): number[] {
    return [ ...data.slice(1), Math.floor(Math.random() * 100) ];
  }

  private genLabels( prevLabels ?: any[] ) {
    const maxValues = 7;
    const result = [];
    let now = Date.now();
    for ( let i = 0; i < maxValues; i += 1 ) {
      result.unshift(now);
      now -= 2000;
    }
    if ( prevLabels ) {
      prevLabels.forEach(( time, index ) => prevLabels[ index ] = this.datePipe.transform(result[ index ], 'H:mm:ss'));
    } else {
      return result.map(( time ) => this.datePipe.transform(time, 'H:mm:ss'));
    }
  }

}
