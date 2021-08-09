import * as WorkOrderActions from '../actions/workorder.actions';
import { WorkOrder } from '../model/workorder.model';



export function workOrderReducer(state:WorkOrder[] = [], action:WorkOrderActions.Actions){
    switch(action.type) {
        case WorkOrderActions.ADD_WORKORDER:
            state = [];
            return [...state, action.payload];

            case WorkOrderActions.CLEAR_WORKORDER:
          /*       state = [];
                return [...state, action.payload]; */
               // state = [];
                return [state = []]; 
        default:
            return state;
    }
}