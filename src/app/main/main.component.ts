import {Component, ViewChild} from '@angular/core';
import {ViewChildComponent} from "../viewChild/view-child.component";

@Component({
    selector: 'main-demo',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.less']
})
export class MainComponent {
    title = 'my-angular-app';
    name = 'kpmg'

    /**父组件通过@ViewChild获取子组件访问权
     *
     * 任何带有 @Component 或 @Directive 装饰器的类
     *
     * 字符串形式的模板引用变量（比如可以使用 @ViewChild('cmp') 来查询 <my-component #cmp></my-component>
     *
     * 组件树中任何当前组件的子组件所定义的提供者（比如 @ViewChild(SomeService) someService: SomeService ）
     *
     * TemplateRef（比如可以用 @ViewChild(TemplateRef) template; 来查询 <ng-template></ng-template>）
     * */
    @ViewChild(ViewChildComponent)
    private childComponent!: ViewChildComponent;//非空断言

    constructor() {
    }

    inputChange($event: string) {
        this.name = $event
    }

    start() {
        this.childComponent.start();
    }

    stop() {
        this.childComponent.stop();
    }
}
