import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { AdminWithApp, AdminWithAppListMatch } from '../IntercomTypes';
declare class AdminWithAppEntity extends IntercomEntityBase<AdminWithApp> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: AdminWithAppEntity): AdminWithAppEntity;
    list(this: any, reqmatch?: AdminWithAppListMatch, ctrl?: Control): Promise<AdminWithAppEntity[]>;
}
export { AdminWithAppEntity };
