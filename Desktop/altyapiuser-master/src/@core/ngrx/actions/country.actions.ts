import { Action } from "@ngrx/store"
import { Country } from "../model/country.model"

export const ADD_LIST_COUNTRY = '[COUNTRY] Liste Ekle'

export class AddListCountry implements Action {
    readonly type = ADD_LIST_COUNTRY
    constructor(public payload: Country[]) { }
}

export type Actions = AddListCountry