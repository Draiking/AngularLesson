import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BackgroundDirective} from './directives/background.directiv';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';


@NgModule({
    declarations: [
        AppComponent,
        BackgroundDirective,
        TestComponent,
        TwoComponent,
        ThreeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
