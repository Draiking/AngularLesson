import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BackgroundDirective} from './directives/background.directiv';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        BackgroundDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
