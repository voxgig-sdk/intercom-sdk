import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Subscription, SubscriptionListMatch, SubscriptionCreateData, SubscriptionRemoveMatch } from '../IntercomTypes';
declare class SubscriptionEntity extends IntercomEntityBase<Subscription> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: SubscriptionEntity): SubscriptionEntity;
    list(this: any, reqmatch?: SubscriptionListMatch, ctrl?: Control): Promise<SubscriptionEntity[]>;
    create(this: any, reqdata?: SubscriptionCreateData, ctrl?: Control): Promise<SubscriptionEntity>;
    remove(this: any, reqmatch?: SubscriptionRemoveMatch, ctrl?: Control): Promise<SubscriptionEntity>;
}
export { SubscriptionEntity };
