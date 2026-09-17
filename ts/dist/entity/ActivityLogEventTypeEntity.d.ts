import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ActivityLogEventType, ActivityLogEventTypeListMatch } from '../IntercomTypes';
declare class ActivityLogEventTypeEntity extends IntercomEntityBase<ActivityLogEventType> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ActivityLogEventTypeEntity): ActivityLogEventTypeEntity;
    list(this: any, reqmatch?: ActivityLogEventTypeListMatch, ctrl?: Control): Promise<ActivityLogEventTypeEntity[]>;
}
export { ActivityLogEventTypeEntity };
