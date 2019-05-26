import {Component, Input, OnInit} from '@angular/core';
import {IData} from '../data.model';
import {DataService} from '../data.service';
import {AppService} from '../app.service';

@Component({
    selector: 'app-two',
    templateUrl: './two.component.html',
    styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

    @Input() data: IData;
    send: string;

    constructor(private dataService: DataService, private appService: AppService) {
        this.dataService.send.subscribe((send) => {
            this.send = send;
        });
        this.dataService.sendboolean.subscribe((sendbool) => {
            this.sendHello();
        });
    }

    ngOnInit() {
    }

    onClick() {
        console.log(this.data);
        this.dataService.sender.next(this.data);
    }

    sendHello() {
        this.dataService.send.next('Hello)');
    }


}
