import {Component, Input, TemplateRef} from '@angular/core';

@Component({
    selector: 'template-outlet-demo',
    templateUrl: './template-outlet.component.html',
    styleUrls: ['./template-outlet.component.less']
})
export class TemplateOutletComponent {
    /**
     * 传入谁属性不只是string,number等常用类型，也可以是一个TemplateRef 类型
     * */
    @Input() template!: TemplateRef<void>;


}
