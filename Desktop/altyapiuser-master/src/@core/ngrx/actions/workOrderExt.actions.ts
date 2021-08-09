import { Action } from "@ngrx/store"
import { FaultRequest, FaultType } from "../model/workOrderExt.model"

export const ADD_LIST_FAULTTYPE = '[FAULTTYPE] Liste Ekle'
export const ADD_LIST_FAULTREQUEST = '[FAULTREQUEST] Liste Ekle'

export class AddListFaultType implements Action {
    readonly type = ADD_LIST_FAULTTYPE
    constructor(public payload: FaultType[]) { }
}

export class AddListFaultRequest implements Action {
    readonly type = ADD_LIST_FAULTREQUEST
    constructor(public payload: FaultRequest[]) { }
}

export type Actions = AddListFaultType | AddListFaultRequest