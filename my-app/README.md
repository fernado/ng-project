# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## 管道的作用就是传输，不同管道具有不同的作用。（处理数据）
Angular 中自带的pipe函数
|管道                         |                           功能|
| --------------------------- | ---------------------------- |
| DatePipe | 日期管道，格式化日期 |
| JsonPipe | 将输入数据对象警告JSON.stringify()方法转换后的输出对象字符串 |
| UpperCasePipe | 将文本所有小写字母转换成大写字母 |
| LowerCasePipe | 将文本所有大写字母转换成小写字母 |
| DecimalPipe | 将数值按照特定格式显示文本 |
| CurrencyPipe | 将数值进行货币格式化处理 |
| SlicePipe | 将数组或字符串裁剪成新子集 |
| PercentPipe | 将数值转百分比格式 |

### pipe用法
{{输入数据|管道：管道参数}}(其中'|'是管道操作符)
链式管道{{输入数据 | date | uppercase}}
管道流方向自左向右，逐层执行
自定义管道
```javascript
ng g p test
```









