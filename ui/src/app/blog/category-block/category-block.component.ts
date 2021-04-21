import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-block',
  templateUrl: './category-block.component.html',
  styleUrls: ['./category-block.component.css']
})
export class CategoryBlockComponent implements OnInit {

  @Input() icon: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
