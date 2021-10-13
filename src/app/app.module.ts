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
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,HttpClientInMemoryWebApiModule,HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent,HeroesComponent,HeroDetailComponent,MessagesComponent,DashboardComponent,HeroSearchComponent,LoginComponent,RegisterComponent,ProfileComponent ],
  providers: [authInterceptorProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
