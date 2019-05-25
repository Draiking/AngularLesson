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

    defaultAnswer = 'no';
    defaultCountry = 'ru';


    /*addRandEmail() {
        const randEmail = 'test@mail.ru';
        this.form.patchValue({
            user: {email: randEmail}
        });
    }*/

    submitForm() {
        console.log('Submited!', this.form);
    }
}
