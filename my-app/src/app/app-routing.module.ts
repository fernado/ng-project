import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { ListComponent } from './list/list.component';
import { TutorialListComponent } from './components/tutorial-list/tutorial-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

// RouterModule: 即路由器

// 路由配置
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    // 组件路由嵌套
    children: [
      {
        path: 'list',
        component: ListComponent
      }
    ]
  },
  {
    path: 'hello/:id:name',
    component: HelloComponent
  },
  
  { 
    path: 'tutorials', 
    component: TutorialListComponent 
  },
  { 
    path: 'tutorials/:id', 
    component: TutorialDetailsComponent 
  },
  { path: 
    'add', 
    component: AddTutorialComponent 
  },
  // 通配所有乱录入的路径
  {
    path: '**',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
