/*-----------------------------------------------------------------------------
    Description: Redux Actions

    @author:  Vikram Simha

    Created: 2/22/2017
-----------------------------------------------------------------------------*/
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IGUIState, IAppState } from './store';

//-----------------------------------------------------------------------------
@Injectable()
export class GuidelineActions {
    //-------------------------------------------------------------------------
    constructor(private _ngRedux: NgRedux<IAppState>) {

    }

    //-------------------------------------------------------------------------
    toggleHeader = () => {
        let isE = this._ngRedux.getState().gui.welcomeHeading;
        return this._ngRedux.dispatch({
            type: "TOGGLE_HEADING",
            payload: {
                welcomeHeading: !isE
            }
        });
    }
}

//-----------------------------------------------------------------------------