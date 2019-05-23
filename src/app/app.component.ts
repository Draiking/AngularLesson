import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    @ViewChild('form') form: NgForm;

    answers = [{
        type: 'yes',
        text: 'да'
    }, {
        type: 'no',
        text: 'нет'
    }];

    submitForm() {
        console.log('Submited!', this.form);
    }
}
