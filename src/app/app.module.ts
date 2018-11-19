import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Modules
import { AppRoutingModule } from './app-routing.module';
import { LoginModule }  from './pages/login/login.module';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { CoreModule } from './core/core.module';

import { FullLayoutComponent } from './layouts/full-layout.component'; 

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    LoginModule,
    MainModule,
    CoreModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
