export type Permissions = 'Admin' | 'Moderator' | 'Operator';

export type User = Omit<PersistedUser, 'id'>;

export interface PersistedUser {
    id: number;
    name: string;
    email: string;
    password: string;
    permissions: Permissions;
};