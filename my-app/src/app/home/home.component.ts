import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title: string = 'Fernando'
  list: Array<string> = ['Angular', 'React']
  
  fData = {
    txtName: 'Check'
  }
  
  @ViewChild('titleDom') child: any

  titleChange() {
    this.title = 'FernandoXX'
  }

  addFunc() {
    this.child.updateBtnAction()
  }

  addListFunc(str: string) {    
    this.list?.push(str)
  }

  updateTxtFunc(str: string) {
    this.fData.txtName = str;
  }
}
