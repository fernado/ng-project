import { Component, OnInit, ViewChild } from '@angular/core';
import { ListService } from '../servers/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private listService: ListService) {

  }

  list: Array<string> | undefined
  ngOnInit(): void {
    // this.list = this.listService.getList()
    console.log(this.list)    
  }

  title: string = 'Fernando'
  
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

  addListAction() {
    this.listService.addList('NodeJS')
  }
}
