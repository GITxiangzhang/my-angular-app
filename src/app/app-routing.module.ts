import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LifecycleComponent} from "./lifecycle/lifecycle.component";
import {MainComponent} from "./main/main.component";
import {OnChangeComponent} from "./onChange/on-change.component";

const routes: Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'main', component: MainComponent},
    {path: 'lifecycle', component: LifecycleComponent},
    {path: 'onChange', component: OnChangeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
