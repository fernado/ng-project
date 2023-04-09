import { Component, OnInit } from '@angular/core';
import axios from 'axios';

interface IData {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    
  fetchedData: IData[] = [];
  displayedData: IData[] = [];
  itemsPerPage: number = 10;
  allPages: number = 0;


  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    const res$ = axios
    .get('http://localhost:8080/api/tutorials')
    .then(res => {        
      this.fetchedData.push(res.data.data)
      this.onPageChange()
      this.allPages = Math.ceil(this.fetchData.length / this.itemsPerPage)
    })
  }

  onPageChange(page: number = 1) {
    const startItem = (page - 1) * this.itemsPerPage;
    const endItem = page * this.itemsPerPage;
    this.displayedData = this.fetchedData.slice(startItem, endItem);
  }

}
