import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ActivityLogList, ActivityLogListCreateData } from '../IntercomTypes';
declare class ActivityLogListEntity extends IntercomEntityBase<ActivityLogList> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ActivityLogListEntity): ActivityLogListEntity;
    create(this: any, reqdata?: ActivityLogListCreateData, ctrl?: Control): Promise<ActivityLogListEntity>;
}
export { ActivityLogListEntity };
