import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {AppService} from '../app.service';
import {IData} from '../data.model';

@Component({
    selector: 'app-three',
    templateUrl: './three.component.html',
    styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {


    data: IData;


    constructor(private dataService: DataService, private appService: AppService) {
    }

    ngOnInit() {
    }


    send(res: boolean) {
        console.log(res);
        if (res === true) {
            this.dataService.sendboolean.next(res);
        }
    }


    async myData() {
        this.data = await this.appService.getMyData();
        console.log(this.data);
    }

}
