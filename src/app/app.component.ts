import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from './data.service';
import {IData} from './data.model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AppService} from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {


    answers = [{
        type: 'yes',
        text: 'да'
    }, {
        type: 'no',
        text: 'нет'
    }];

    form: FormGroup;

    data: IData;

    send: string;
    // отписка от подписок
    private unsubscribeAll: Subject<any> = new Subject();

    constructor(private dataService: DataService, private appService: AppService) {
        this.dataService.send
        // отписка от подписок
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe((send) => {
            this.send = send;
        });

    }

    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
            country: new FormControl('ru'),
            answer: new FormControl('no'),
        });
        this.patchForm();
    }

    async patchForm() {
        this.data = await this.dataService.getMyData();
        console.log(this.data);
        this.form.patchValue({email: this.data.email});
        this.form.patchValue({password: this.data.password});
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        // отписка от подписок
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }


}
