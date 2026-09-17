import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { MergeHistory, MergeHistoryListMatch } from '../IntercomTypes';
declare class MergeHistoryEntity extends IntercomEntityBase<MergeHistory> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: MergeHistoryEntity): MergeHistoryEntity;
    list(this: any, reqmatch?: MergeHistoryListMatch, ctrl?: Control): Promise<MergeHistoryEntity[]>;
}
export { MergeHistoryEntity };
