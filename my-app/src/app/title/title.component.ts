import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  // 父组件通过`@Input` 给子组件绑定属性设置输入类数据
  // 父组件给子组件传值
  @Input()
  title?: string

  // 子组件给父组件传递一个事件，子组件通过`@Output`弹射触发事件
  // 子组件给父组件传值
  @Output()
  addList = new EventEmitter()

  @Output()
  updateTxtName = new EventEmitter

  addBtnAction() {
    this.addList.emit('Vue');
  }

  updateTimes = 1;

  updateBtnAction(): void {    
    this.updateTxtName.emit('Updated' + this.updateTimes++)
  }

  constructor() {
    console.log('constructor')
  }

  ngOnChanges() {
    console.log(this.title)
    console.log('ngOnChanges')
  } 

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log('ngOnInit')
  }

  // ngDoCheck() {
  //   console.log('ngDoCheck')
  // }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit')
  // }

  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked')
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit')
  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked')
  // }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }

}
