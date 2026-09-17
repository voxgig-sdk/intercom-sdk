import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { SubscriptionType, SubscriptionTypeListMatch } from '../IntercomTypes';
declare class SubscriptionTypeEntity extends IntercomEntityBase<SubscriptionType> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: SubscriptionTypeEntity): SubscriptionTypeEntity;
    list(this: any, reqmatch?: SubscriptionTypeListMatch, ctrl?: Control): Promise<SubscriptionTypeEntity[]>;
}
export { SubscriptionTypeEntity };
