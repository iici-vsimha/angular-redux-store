/*-----------------------------------------------------------------------------
  Description: App Module

  @author:  Vikram Simha

  Created: 2/22/2017
-----------------------------------------------------------------------------*/
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
// import { AppStore } from './app.store';
import { NgReduxModule } from '@angular-redux/store';

import { GuidelineActions } from './actions';

//-----------------------------------------------------------------------------
@NgModule({
  imports: [BrowserModule, NgReduxModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GuidelineActions]
})

export class AppModule { }
//-----------------------------------------------------------------------------
