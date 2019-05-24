import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    answers = [{
        type: 'yes',
        text: 'да'
    }, {
        type: 'no',
        text: 'нет'
    }];

    defaultAnswer = 'no';
    defaultCountry = 'ru';

    submitForm(form: NgForm) {
        console.log('Submited!', form);
    }
}
