import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {IData} from '../data.model';


@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


    data: IData;

    constructor(private dataService: DataService) {
        this.dataService.sender.subscribe((data) => {
            this.data = data;
        });
    }

    ngOnInit() {
    }


    send() {
        this.dataService.send.next('hello word');
    }


}
