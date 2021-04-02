import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-mini-graph',
  templateUrl: './mini-graph.component.html',
  styleUrls: ['./mini-graph.component.css']
})
export class MiniGraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    new Chart('miniCanva', {
      type: 'horizontalBar',
      data: {
        labels: ['Pakistan', 'Bussiness', 'Technology', 'Sports'],
        datasets: [
          {
            label: 'Dawn',
            backgroundColor: 'rgba(00,255,00,1)',
            borderWidth: 2,
            data: [476, 879, 345, 500],
          },
          {
            label: 'DailyTimes',
            backgroundColor: 'rgba(255,0,00,1)',
            borderWidth: 2,
            data: [524, 121, 655, 500],
          }
        ]
      },
      options: null
    });
  }

}
