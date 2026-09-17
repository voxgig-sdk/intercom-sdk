import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { AwayStatusReason, AwayStatusReasonListMatch } from '../IntercomTypes';
declare class AwayStatusReasonEntity extends IntercomEntityBase<AwayStatusReason> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: AwayStatusReasonEntity): AwayStatusReasonEntity;
    list(this: any, reqmatch?: AwayStatusReasonListMatch, ctrl?: Control): Promise<AwayStatusReasonEntity[]>;
}
export { AwayStatusReasonEntity };
