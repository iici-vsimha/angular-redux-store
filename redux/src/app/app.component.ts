/*-----------------------------------------------------------------------------
  Description: App Component

  @author:  Vikram Simha

  Created: 2/22/2017
-----------------------------------------------------------------------------*/
import { Component, Inject } from '@angular/core';
import { Map } from 'immutable';
import {  IAppState, rootReducer} from './store';
import { Observable } from 'rxjs/Observable';
import { Store } from 'redux';
import { IGUIState, guiReducer } from './store';
import { AppStore } from './app.store';
import { toggleHeader } from './actions';

//-----------------------------------------------------------------------------
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html'
})

//-----------------------------------------------------------------------------
export class AppComponent {
  welcomeHeading = true;
  
  //-------------------------------------------------------------------------  
  constructor(private appStore: AppStore){
    appStore.store.subscribe(() => this.readState());
    this.readState();
  }
  readState() {
    let state: IGUIState = this.appStore.store.getState() as IGUIState;
    this.welcomeHeading = state.welcomeHeading;
  }
  //-------------------------------------------------------------------------
  toggleHeading() {    
    this.appStore.store.dispatch(toggleHeader(!this.welcomeHeading));
  }
}

//-----------------------------------------------------------------------------