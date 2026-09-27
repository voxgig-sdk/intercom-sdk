import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Cancel, CancelCreateData } from '../IntercomTypes';
declare class CancelEntity extends IntercomEntityBase<Cancel> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: CancelEntity): CancelEntity;
    create(this: any, reqdata?: CancelCreateData, ctrl?: Control): Promise<CancelEntity>;
}
export { CancelEntity };
