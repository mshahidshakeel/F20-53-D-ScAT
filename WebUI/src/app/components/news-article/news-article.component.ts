import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent implements OnInit {

  @Input() public title = 'PM takes notice of officers\' inaction on complaints lodged on Pakistan Citizen Portal app';
  @Input() public imageUrl = 'https://i.dawn.com/large/2019/11/5dc8d459f19ab.jpg';
  @Input() public body = '"Prime Minister Imran Khan has taken notice of the inaction of officers regarding citizens\' complaints lodged on the Pakistan Citizen Portal app, Radio Pakistan reported on Monday.\n' +
      '\n' +
      'Quoting Prime Minister\'s Office (PMO), the report added that all ministries and departments have been directed to form five-member committees to ""conduct performance evaluation and submit their reports within 30 days"".\n' +
      '\n' +
      '""The [PMO] had observed that complaints were disposed of without proper inquiry, satisfactory reply, and documentary evidence,"" the report stated, adding that the departments took ""unnecessary time"" in addressing complaints and the decision to resolve complaints was taken by ""unconcerned officials"".\n' +
      '\n' +
      'The PMO has written a letter to the ministries and provincial departments, Radio Pakistan reported.\n' +
      '\n' +
      'The five-member committees will be headed a grade 20 officer or a joint secretary. Following an evaluation of the deployed officers, a report will be submitted.\n' +
      '\n' +
      'The committees will note misconduct in reports on the portal for both resolved and pending complaints as well as point out those who were responsible for both good and bad performances.\n' +
      '\n' +
      'The Pakistan Tehreek-i-Insaf (PTI) government launched the portal on October 28, 2018. In February, it was declared the second best government mobile application in the world at the World Government Summit."';

  constructor() { }

  ngOnInit(): void {
  }

}
