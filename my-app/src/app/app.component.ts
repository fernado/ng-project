import { Component } from '@angular/core';

@Component({

  // 渲染的选择器，类似jQuery的标签选择器，这个是<app-root/>标签
  selector: 'app-root',
  // 对应的组件模板，也可以是 `template`
  templateUrl: './app.component.html',
  // 接收多个样式表，数组格式
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app ----';
}
