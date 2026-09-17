import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ReportingData, ReportingDataLoadMatch } from '../IntercomTypes';
declare class ReportingDataEntity extends IntercomEntityBase<ReportingData> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ReportingDataEntity): ReportingDataEntity;
    load(this: any, reqmatch?: ReportingDataLoadMatch, ctrl?: Control): Promise<ReportingDataEntity>;
}
export { ReportingDataEntity };
