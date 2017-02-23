/*-----------------------------------------------------------------------------
    Description: Redux Actions

    @author:  Vikram Simha

    Created: 2/22/2017
-----------------------------------------------------------------------------*/
import { Injectable } from '@angular/core';
import { IGUIState, IAppState } from './store';
import {
    Action,
    ActionCreator
} from 'redux';

//-----------------------------------------------------------------------------
export const toggleHeader: ActionCreator<Action> = (isE: boolean) => ({
    type: "TOGGLE_HEADING",
    payload: {
        welcomeHeading: isE
    }
});

//-----------------------------------------------------------------------------

