import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {IData} from '../data.model';
import {AppService} from '../app.service';


@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {


    data: IData;
    text: string;

    constructor(private dataService: DataService, private appService: AppService) {
        this.dataService.sender.subscribe((data) => {
            this.data = data;
        });
        this.dataService.send.subscribe((text) => {
           console.log(text);
        });
    }

    ngOnInit() {
    }


    send() {
        this.dataService.send.next('hello word');
    }


}
