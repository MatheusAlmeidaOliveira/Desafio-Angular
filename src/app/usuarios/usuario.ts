import { Address } from './address';
import { Company } from './company';

export class Usuario 
{
    id!: number;
    name!: string;
    username!: string;
    email!: string;   
    address: Address = new Address();
    phone!: string;
    website!: string;
    company: Company = new Company();
}