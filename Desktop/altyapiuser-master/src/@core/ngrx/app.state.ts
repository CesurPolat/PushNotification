import { Country } from "./model/country.model";
import { GkhnTest } from "./model/gkhn.test.model";
import { Status } from "./model/status.model";
import { WorkOrder } from "./model/workorder.model";
import { FaultRequest, FaultType } from "./model/workOrderExt.model";

export interface AppState {
    readonly gkhn: GkhnTest[];
    readonly workOrders: WorkOrder[];
    readonly country: Country[];
    readonly faultType: FaultType[];
    readonly faultRequest: FaultRequest[];
    readonly statuses:Status[];
}