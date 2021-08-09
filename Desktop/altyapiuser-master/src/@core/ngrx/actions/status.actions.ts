import { Action } from "@ngrx/store"
import { Status } from "../model/status.model"

export const ADD_LIST_STATUS = '[STATUS] Liste Ekle'

export class AddListStatus implements Action {
    readonly type = ADD_LIST_STATUS
    constructor(public payload: Status[]) { }
}

export type Actions = AddListStatus