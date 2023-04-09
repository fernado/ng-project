import { Injectable } from '@angular/core';

// 使用 Injectable 装饰器声明服务
@Injectable({
  // 作用域设定，
  // root 表示默认注入，注入到app.module.ts里
  // null 表示不设定区域 （不推荐）
  // 组件名 只作用于该组件（懒加载模式）
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  list: Array<string> = ['Angular', 'React', 'Vue']

  getList() {
    return this.list
  }

  addList(str: string) {
    this.list.push(str)
  }
}
