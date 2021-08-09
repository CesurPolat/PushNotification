import * as GkhnActions from '../actions/gkhn.actions';
import { GkhnTest } from "../model/gkhn.test.model";


const initialState: GkhnTest[] = [
    {
        name: 'Gökhan',
        surname: 'Öztürk',
        gender: 'Male'
    },
    {
        name: 'gunes',
        surname: 'Öztürk',
        gender: 'Male'
    }

]


export function gkhnReducer(state: GkhnTest[] = initialState, action: GkhnActions.Actions) {
    switch (action.type) {
        case GkhnActions.ADD_GKHN:
            return [...state, action.payload];

        case GkhnActions.ADD_LIST_GKHN:
            return [...state, ...action.payload];
            
        case GkhnActions.REMOVE_GKHN:
            state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}