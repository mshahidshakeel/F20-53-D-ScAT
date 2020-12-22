import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-similar-news',
  templateUrl: './similar-news.component.html',
  styleUrls: ['./similar-news.component.css']
})
export class SimilarNewsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }
  type: string;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.type = params.get('type');
    });
  }

}
