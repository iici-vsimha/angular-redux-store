/*-----------------------------------------------------------------------------
    Description: GUI Store and Reducers

    @author:  Vikram Simha

    Created: 2/22/2017
-----------------------------------------------------------------------------*/
import { Map, Record, List, Iterable } from 'immutable';
import { Reducer, Action, combineReducers } from 'redux';

//-----------------------------------------------------------------------------
let _initial = {
    welcomeHeading: true
};

let GUIStateRecord = Record(JSON.parse(JSON.stringify(_initial)));

export interface IGUIState extends Map<string, any> {
    welcomeHeading: boolean;    
};

//-----------------------------------------------------------------------------
const INITIAL_STATE = new GUIStateRecord(JSON.parse(JSON.stringify(_initial))) as IGUIState;

export const guiReducer: Reducer<IGUIState> = (state = INITIAL_STATE, action: Action): IGUIState => {
    switch (action.type) {
        case "TOGGLE_HEADING":
            let st = state.merge(action['payload']);
            return st as IGUIState;

        default:
            return state as IGUIState;
    }
}

//-----------------------------------------------------------------------------
export interface IAppState {
    gui?: IGUIState;    
};

//-----------------------------------------------------------------------------
export const rootReducer = combineReducers<IAppState>({
    gui: guiReducer,    
});

//-----------------------------------------------------------------------------