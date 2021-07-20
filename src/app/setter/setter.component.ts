import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'setter-demo',
    templateUrl: './setter.component.html'
})
export class SetterComponent {
    /**
     * @Input()装饰器定义输入属性，通过输入性属性把数据从父组件传递给子组件
     * */
    @Input()
    /**
     * 通过setter截听输入属性的变化
     * */
    set name(name: string) {
        this._name = name.toUpperCase();
    }

    get name(): string {
        return this._name;
    }

    private _name = '';

    /**
     * @Output()装饰器暴露一个EventEmitter属性，父组件绑定此事件属性定义回应方法
     * */
    @Output() inputChange = new EventEmitter<string>();


    constructor() {
    }

    change($event: string) {
        console.log($event)
        /**
         * @子组件利用inputChange.emit(向上发布)事件
         * */
        //this.inputChange.emit(this.name)
    }


}
