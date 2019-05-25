import {Injectable} from '@angular/core';
import {IData} from './data.model';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    myData: IData;
    sender = new Subject();
    send = new Subject();

    constructor(private http: HttpClient) {
    }


    async getMyData(): Promise<IData> {
        this.myData = await this.http.get<IData>('assets/my-data.json').toPromise();
        return this.myData;
    }
}
