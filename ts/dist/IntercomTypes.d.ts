export interface Contact {
    created_at?: number;
    email?: string;
    id?: string;
    name?: string;
    phone?: string;
    role?: string;
    updated_at?: number;
}
export interface ContactLoadMatch {
    id: string;
}
export interface ContactListMatch {
    per_page?: number;
}
export interface ContactCreateData {
    created_at?: number;
    email?: string;
    id?: string;
    name?: string;
    phone?: string;
    role?: string;
    updated_at?: number;
}
export interface ContactUpdateData {
    id: string;
    created_at?: number;
    email?: string;
    name?: string;
    phone?: string;
    role?: string;
    updated_at?: number;
}
export interface ContactRemoveMatch {
    id: string;
}
