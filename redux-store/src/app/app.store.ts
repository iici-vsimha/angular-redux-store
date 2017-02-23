/*-----------------------------------------------------------------------------
    Description: Redux Store

    @author:  Vikram Simha

    Created: 2/22/2017
-----------------------------------------------------------------------------*/
//-----------------------------------------------------------------------------
import { Injectable } from '@angular/core';
import {
    createStore,
    Store    
} from 'redux';
import { IGUIState, guiReducer } from './store';

//-----------------------------------------------------------------------------
@Injectable()
export class AppStore {
    store: Store<IGUIState>;
    //-------------------------------------------------------------------------
    constructor() {
        this.store = createStore<IGUIState>(
            guiReducer);
    }
}

//-----------------------------------------------------------------------------