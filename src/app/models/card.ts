import { Address } from "./address";

export interface Card {

    name?: string;
    title: string;
    phone: string;
    email?: string;
    website?: string;
    address?: Address;
    nevAddress?:string;
}

