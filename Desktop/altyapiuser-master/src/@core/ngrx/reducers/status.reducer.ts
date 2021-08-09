import * as StatusActions from '../actions/status.actions';
import { Status } from '../model/status.model';


export function statusReducer(state:Status[] = [], action: StatusActions.Actions){
    switch(action.type) {
        case StatusActions.ADD_LIST_STATUS:
            return [...state, ...action.payload];

        default:
            return state;
    }
}