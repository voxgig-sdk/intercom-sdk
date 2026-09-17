import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { DataEventSummary, DataEventSummaryListMatch } from '../IntercomTypes';
declare class DataEventSummaryEntity extends IntercomEntityBase<DataEventSummary> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: DataEventSummaryEntity): DataEventSummaryEntity;
    list(this: any, reqmatch?: DataEventSummaryListMatch, ctrl?: Control): Promise<DataEventSummaryEntity[]>;
}
export { DataEventSummaryEntity };
