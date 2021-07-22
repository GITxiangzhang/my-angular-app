import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
    selector: 'my-input-demo',
    templateUrl: './my-input.component.html'
})
export class MyInputComponent implements OnInit {
    @Input() value = ''
    /**
     * angular中约定@input()属性名+change 定义@output EventEmitter属性名，即可在调用时实现[(value)]的双向绑定写法
     * */
    @Output() valueChange = new EventEmitter<string>();
    options: any[] = []

    change($event: string) {
        this.valueChange.emit($event)
    }

    ngOnInit() {
        const that = this
        setTimeout(() => {
            this.options = [
                {id: '1', name: 'Max'},
                {id: '2', name: 'Tiny'},
                {id: '3', name: 'David'},
            ]
        }, 100)
    }
}
