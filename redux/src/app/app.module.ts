/*-----------------------------------------------------------------------------
  Description: App Module

  @author:  Vikram Simha

  Created: 2/22/2017
-----------------------------------------------------------------------------*/
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppStore } from './app.store';

//-----------------------------------------------------------------------------
@NgModule({
  imports: [BrowserModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    AppStore
    ]
})

export class AppModule { }

//-----------------------------------------------------------------------------
