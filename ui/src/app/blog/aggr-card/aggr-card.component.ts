import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-aggr-card',
  templateUrl: './aggr-card.component.html',
  styleUrls: ['./aggr-card.component.css']
})
export class AggrCardComponent implements OnInit {
  isActive = false;
  @Input() id: string;
  @Input() title: string;
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
