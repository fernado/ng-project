import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestPipe } from './pipes/test.pipe';
import { HomeComponent } from './home/home.component';
import { TitleComponent } from './title/title.component';
import { ListService } from './servers/list.service';
import { ListComponent } from './list/list.component';
import { ListDataComponent } from './list/list-data/list-data.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { TutorialListComponent } from './components/tutorial-list/tutorial-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TestPipe,
    HomeComponent,
    TitleComponent,
    ListComponent,
    ListDataComponent,
    TutorialListComponent,
    TutorialDetailsComponent,
    AddTutorialComponent
  ],
  // 什么组件需要用到的类
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
