import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global.service';
import * as WorkOrderExtActions from '../actions/workOrderExt.actions';
import { WorkOrder } from '../model/workorder.model';
import { FaultRequest, FaultType } from '../model/workOrderExt.model';


/*   const initialState: FaultType = {
      id: 54,
      name: 'FaultXX'  
  }   */


export function faultTypeReducer(state:FaultType[] = [], action:WorkOrderExtActions.Actions){
    
    switch(action.type) {
        case WorkOrderExtActions.ADD_LIST_FAULTTYPE:
            return [...state, ...action.payload];

        default:
            return state;
    }
}

export function faultRequestReducer(state:FaultRequest[] = [], action:WorkOrderExtActions.Actions){
    
    switch(action.type) {
        case WorkOrderExtActions.ADD_LIST_FAULTREQUEST:
            return [...state, ...action.payload];

        default:
            return state;
    }
}