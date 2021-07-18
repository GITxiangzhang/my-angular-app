import {Component} from '@angular/core';

@Component({
    selector: 'on-change-demo',
    templateUrl: './on-change.component.html'
})
export class OnChangeComponent {
    changeName = 'A'

    change() {
        this.changeName = 'B'
    }
}
