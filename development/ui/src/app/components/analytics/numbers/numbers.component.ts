import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-numbers',
    templateUrl: './numbers.component.html',
    styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
    @Input() title = 'Channel Name';
    // @Input() total = 100;
    @Input() number = 100;
    isActive = false;

    constructor() {
    }

    ngOnInit(): void {
    }

}
