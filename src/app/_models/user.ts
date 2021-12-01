import { Role } from './role';

export class User {
    id!: string;
    title!: string;
    firstName!: string;
    lastName!: string;
    email!: string;
    mobile!: string;
    role!: Role;
    isDeleting: boolean = false;
}