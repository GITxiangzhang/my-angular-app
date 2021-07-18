import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges
} from '@angular/core';

@Component({
    selector: 'lifecycle-demo',
    templateUrl: './lifecycle.component.html',
    styleUrls: ['./lifecycle.component.less']
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck,
    AfterContentInit, AfterContentChecked,
    AfterViewInit, AfterViewChecked,
    OnDestroy {


    @Input() name = 'initName';


    constructor() {
        console.log('constructor-----------------------begin')
        console.log('ngOnInit:' + this.name)
        console.log('constructor-----------------------end')
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges-----------------------begin')
        for (const propName in changes) {
            if (propName === 'name') {
                const currentValue = changes.name.currentValue;
                const oldValue = changes.name.previousValue;
                console.log('currentValue:' + currentValue)
                console.log('oldValue:' + oldValue)
            }
        }
        console.log('ngOnChanges-----------------------end')
    }

    ngOnInit() {
        console.log('ngOnInit-----------------------begin')
        console.log('ngOnInit:' + this.name)
        console.log('ngOnInit-----------------------end')
    }

    ngDoCheck() {
        console.log('ngDoCheck-----------------------begin')
        console.log('ngDoCheck:' + this.name)
        console.log('ngDoCheck-----------------------end')
    }

    ngAfterContentInit(){
        console.log('ngAfterContentInit-----------------------begin')
        console.log('ngAfterContentInit:' + this.name)
        console.log('ngAfterContentInit-----------------------end')
    }

    ngAfterContentChecked(){
        console.log('ngAfterContentChecked-----------------------begin')
        console.log('ngAfterContentChecked:' + this.name)
        console.log('ngAfterContentChecked-----------------------end')
    }

    ngAfterViewInit(){
        console.log('ngAfterViewInit-----------------------begin')
        console.log('ngAfterViewInit:' + this.name)
        console.log('ngAfterViewInit-----------------------end')
    }

    ngAfterViewChecked(){
        console.log('ngAfterViewChecked-----------------------begin')
        console.log('ngAfterViewChecked:' + this.name)
        console.log('ngAfterViewChecked-----------------------end')
    }

    ngOnDestroy(){
        console.log('ngOnDestroy-----------------------begin')
        console.log('ngOnDestroy:' + this.name)
        console.log('ngOnDestroy-----------------------end')
    }

}
