import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LifecycleComponent} from "./lifecycle/lifecycle.component";
import {MainComponent} from "./main/main.component";
import {OnChangeComponent} from "./onChange/on-change.component";
import {SetterComponent} from "./setter/setter.component";
import {ViewChildComponent} from "./viewChild/view-child.component";

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LifecycleComponent,
        OnChangeComponent,
        SetterComponent,
        ViewChildComponent
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
