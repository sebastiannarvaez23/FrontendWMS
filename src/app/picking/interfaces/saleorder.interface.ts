import { Customer } from "src/app/core/interfaces/customer.interface";

export interface SaleOrder {
    id: number;
    dateDocument: Date;
    dateInvoice: Date;
    obs: string;
    dateDelivery: Date;
    customer: Customer;
}