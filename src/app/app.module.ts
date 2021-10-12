import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './database/in-memory-data.service'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,HttpClientInMemoryWebApiModule,HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}) ],
  declarations: [ AppComponent, HelloComponent,HeroesComponent,HeroDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
