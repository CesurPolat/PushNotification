/* 
export interface RelationUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    status: boolean;
}

export interface Customer {
    id: number;
    email: string;
    cityId: number;
    districtId: number;
    customerType: number;
    fullName: string;
}

export class FaultType {
    id: number;
    name: string;
}

export interface FaultRequest {
    id: number;
    name: string;
} */

import { Customer, FaultRequest, FaultType, JobCreator } from "./workOrderExt.model";

export interface WorkOrder {
    id?: number;
    createdDate?: Date;
    updatedDate?: Date;
    workOrderDate?: Date;
    instantStatusId?: number;
    description?: string;
    googleMaps?: string;
    jobCreatorId?: number;
    relationUser?: JobCreator;
    customerId?: number;
    customer?: Customer;
    faultTypeId?: number;
    faultType?: FaultType;
    faultRequestId?: number;
    faultRequest?: FaultRequest;
}