export class FaultType{
    id: number;
    name? : string;
}

export class FaultRequest{
    id: number;
    name? : string;
}

export class CorporateCustomer {
    customerId: number;
    companyName: string;
}

export class IndividualCustomer {
    customerId: number;
    name?: string;
    lastName?: string;
}

export class Customer {
    corporateCustomer?: CorporateCustomer;
    id: number;
    address: string;
    phone: string;
    description: string;
    email: string;
    cityId: number;
    districtId: number;
    customerType: number;
    fullName: string;
}


export class JobCreator {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    status: boolean;
}

// jobcreator
