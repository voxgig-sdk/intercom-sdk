import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ActivityLog, ActivityLogListMatch } from '../IntercomTypes';
declare class ActivityLogEntity extends IntercomEntityBase<ActivityLog> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ActivityLogEntity): ActivityLogEntity;
    list(this: any, reqmatch?: ActivityLogListMatch, ctrl?: Control): Promise<ActivityLogEntity[]>;
}
export { ActivityLogEntity };
