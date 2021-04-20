import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  categories = [];

  constructor() {
    this.categories.push(new Category('Home', '/assets/icons/home-60.png'));
    this.categories.push(new Category('Technology', '/assets/icons/macbook-60.png'));
    this.categories.push(new Category('Sports', '/assets/icons/hammer-throw-60.png'));
    this.categories.push(new Category('Business', '/assets/icons/briefcase-50.png'));
    this.categories.push(new Category('Pakistan', '/assets/icons/pakistan-96.png'));
  }

  ngOnInit(): void {
  }

}

class Category {
  private icon: string;
  private title: string;

  constructor(title: string, icon: string) {
    this.title = title;
    this.icon = icon;
  }

  get getIcon(): string {
    return this.icon;
  }

  get getTitle(): string {
    return this.title;
  }
}
