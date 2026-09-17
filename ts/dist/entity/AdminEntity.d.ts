import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Admin, AdminLoadMatch, AdminListMatch, AdminUpdateData } from '../IntercomTypes';
declare class AdminEntity extends IntercomEntityBase<Admin> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: AdminEntity): AdminEntity;
    load(this: any, reqmatch?: AdminLoadMatch, ctrl?: Control): Promise<AdminEntity>;
    list(this: any, reqmatch?: AdminListMatch, ctrl?: Control): Promise<AdminEntity[]>;
    update(this: any, reqdata?: AdminUpdateData, ctrl?: Control): Promise<AdminEntity>;
}
export { AdminEntity };
