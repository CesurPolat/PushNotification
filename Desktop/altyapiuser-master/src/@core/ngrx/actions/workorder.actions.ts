import { Action } from "@ngrx/store"
import { WorkOrder } from "../model/workorder.model"


export const ADD_WORKORDER  = '[WORKORDER] Ekle'
export const CLEAR_WORKORDER  = '[WORKORDER] Store Temizle'

export class AddWorkOrder implements Action {
    readonly type = ADD_WORKORDER
    constructor(public payload: WorkOrder[]) {}
}

export class ClearWorkOrder implements Action {
    readonly type = CLEAR_WORKORDER
    constructor() {}
}

export type Actions = AddWorkOrder | ClearWorkOrder