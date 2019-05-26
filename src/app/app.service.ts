import {Injectable} from '@angular/core';
import {IData} from './data.model';
import {DataService} from './data.service';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    myData: IData;

    constructor(private dataService: DataService) {
    }

    async getMyData(): Promise<IData> {
       return this.dataService.getMyData();
    }


}
