import { Component, OnInit } from '@angular/core';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { Chart } from 'node_modules/chart.js'

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  isActive = false;
  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    new Chart('canvaGraph', {
      type: 'radar',
      data: {
        labels: ['Pakistan', 'Bussiness', 'Technology', 'Sports'],
        datasets: [
          {
            label: 'Dawn',
            backgroundColor: 'rgba(00,255,00,0.1)',
            borderColor: 'rgba(00,255,00,0.5)',
            borderWidth: 2,
            data: [476, 879, 345, 500],
          },
          {
            label: 'DailyTimes',
            backgroundColor: 'rgba(255,0,00,0.1)',
            borderColor: 'rgba(255,0,00,0.5)',
            borderWidth: 2,
            data: [524, 121, 655, 500],
          }
        ]
      },
      options: null
    });
  }

}
