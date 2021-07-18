import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LifecycleComponent} from "./lifecycle/lifecycle.component";
import {MainComponent} from "./main/main.component";
import {OnChangeComponent} from "./onChange/on-change.component";

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LifecycleComponent,
        OnChangeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
