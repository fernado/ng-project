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


## 服务
angular 中，把从组件内抽离出来的代码叫服务，服务的本质就是函数
官方认为组件不应该直接获取或保存数据，他们应该聚焦于展示数据，而把数据访问的职责委托给某个服务。而服务就充当着数据访问，逻辑处理的功能。把组件和服务区分开，以提高模块性和复用性。通过把组件中的视图有关的功能与其他类型的出力分离开，可以让组件类更加精简，搞笑。
使用命令`ng g s xx`创建服务，通过`@Injectable()`装饰器标识服务。


## 路由
路由是连接组件的脉络，它是睡醒结构的，可以在angular中实现路径的导航模式
可以把路由看成是一组规则，它决定了url的变化对应着哪一种状态，具体表现就是不同视图的切换
在angular中，路由是非常重要的组成部分，组件的实例化与销毁，模块的加载，组件的某些生命周期钩子的发起，都是与它相关

### 路由基本使用
路由器是一个调度中心。它是一套规则的列表，能够查询当前URL对应的规则，并呈现出相应的视图。
路由是列表里面的一个规则，即路由定义。
path字段 该路由中的url路径部分
Component字段 与该路由相关的组件
每个带路由的angular应用都有一个路由器服务的单例对象，通过路由定义的列表进行配置后使用

### 路由嵌套






