import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-aggr-news-card',
  templateUrl: './aggr-news-card.component.html',
  styleUrls: ['./aggr-news-card.component.css']
})
export class AggrNewsCardComponent implements OnInit {
  isActive = false;
  // @Input() summary: Summary;
  @Input() id: string;
  @Input() image: string;
  @Input() title: string;
  @Input() aggr: string;
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
