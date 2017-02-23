/*-----------------------------------------------------------------------------
  Description: App Component

  @author:  Vikram Simha

  Created: 2/22/2017
-----------------------------------------------------------------------------*/
import { Component, Inject } from '@angular/core';
import { Map } from 'immutable';
import {  IAppState, rootReducer} from './store';
import { GuidelineActions } from './actions';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

//-----------------------------------------------------------------------------
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html'
})

//-----------------------------------------------------------------------------
export class AppComponent {
  welcomeHeading = true; 
  @select(['gui']) gui$: Observable<any>;

  //-------------------------------------------------------------------------
  constructor(ngRedux: NgRedux<IAppState>, private _gla: GuidelineActions) {
        ngRedux.configureStore(rootReducer, {});
       
    }
 
  //-------------------------------------------------------------------------
  toggleHeading() {
    this._gla.toggleHeader();
    // this.appStore.store.dispatch(toggleHeader(!this.welcomeHeading));
  }
}

//-----------------------------------------------------------------------------