import * as CountryActions from '../actions/country.actions';
import { Country } from '../model/country.model';
import { WorkOrder } from '../model/workorder.model';


  const initialState: Country = {
      id: 54,
      name: 'Sakarya'  
  }  


export function countryReducer(state:WorkOrder[] = [], action:CountryActions.Actions){
    switch(action.type) {
        case CountryActions.ADD_LIST_COUNTRY:
            return [...state, ...action.payload];

        default:
            return state;
    }
}