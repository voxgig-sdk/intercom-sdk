import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { CompanyAttachedSegment, CompanyAttachedSegmentListMatch } from '../IntercomTypes';
declare class CompanyAttachedSegmentEntity extends IntercomEntityBase<CompanyAttachedSegment> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: CompanyAttachedSegmentEntity): CompanyAttachedSegmentEntity;
    list(this: any, reqmatch?: CompanyAttachedSegmentListMatch, ctrl?: Control): Promise<CompanyAttachedSegmentEntity[]>;
}
export { CompanyAttachedSegmentEntity };
