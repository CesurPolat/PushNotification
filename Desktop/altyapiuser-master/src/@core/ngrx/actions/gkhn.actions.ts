import { Action } from "@ngrx/store"
import { GkhnTest } from "../model/gkhn.test.model"


export const ADD_GKHN       = '[GKHN] Ekle'
export const ADD_LIST_GKHN  = '[GKHN] Liste Ekle'
export const REMOVE_GKHN    = '[GKHN] Sil'


export class AddGkhn implements Action {
    readonly type = ADD_GKHN

    constructor(public payload: GkhnTest) {}
}

export class AddListGkhn implements Action {
    readonly type = ADD_LIST_GKHN

    constructor(public payload: GkhnTest[]) {}
}

export class RemoveGkhn implements Action {
    readonly type = REMOVE_GKHN

    constructor(public payload: number) {}
}

export type Actions = AddGkhn | AddListGkhn | RemoveGkhn