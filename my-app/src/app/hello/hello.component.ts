import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
// 可以在这个`class`-`HelloComponent`写业务逻辑
export class HelloComponent implements OnInit {

  constructor(private fB: FormBuilder) {
  }


  name: string = 'Fernando'
  date: Date = new Date()
  box: string = 'div-dom'
  item: string = 'item-p'

  h3Dom: boolean = true
  h3Class: string = 'h3-dom font-w String'

  isActive: boolean = true

  isMax: boolean = false

  colors: Array<string> = ['red', 'blue', 'yellow', 'green']

  type: number = 3

  title: string = ''

  age: FormControl = new FormControl('')

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })


  formData = {
    name: '',
    password: ''
  }

  inputChange(e: any) {
    console.log(e.target.value)
  }

  clickAction(e: Event) {
    console.log("你点击了按钮")
    console.log(e)
  }

  getUserName(v: string) {
    console.log(v)
  }

  ageInc() {
    this.age.setValue(this.age.value > 0 ? this.age.value + 1 : 18)
  }

  submitForm() {
    console.log(this.loginForm.value)
  }

  submitFormFromButton(obj: any) {
    console.log(obj)
  }

  ngOnInit(): void {
      
  }

  validateDataForm: FormGroup = this.fB.group({    
    userName: [
      // 默认值
      '', 
      // 内置验证器
      [ 
        Validators.required,
        Validators.maxLength(18),
        Validators.minLength(6)
      ]
    ],
    password: ['', 
      // 自定义验证或者验证器
      [
        this.passwordVal
      ]
    ],
    phone: ['', 
      // 组合验证
      [
        Validators.required, 
        this.phoneVal
      ]
    ]
  });


  passwordVal(password: FormControl): object {
    // 断言，如果value不存在，则给''
    let value = password.value || ''
    if (!value) {
      return {msg: '请输入密码'}
    }
    const valid = value.match(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/)
    return valid ? {} : {msg: '密码格式不正确'}    
  }

  phoneVal(phone: FormControl): object {
    let value = phone.value || ''
    if (!value) {
      return {msg: '请输入手机号'}
    }
    const valid = value.match(/[0-9]{11}/)
    return valid ? {} : {msg: '联系电话必须是11位数字'}    
  }

  submitValidateDataForm() {
    console.log(this.validateDataForm.get('userName'))
    // this.validateDataForm.get('userName');
  }
}
