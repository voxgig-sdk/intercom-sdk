import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ContactSegment, ContactSegmentListMatch } from '../IntercomTypes';
declare class ContactSegmentEntity extends IntercomEntityBase<ContactSegment> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ContactSegmentEntity): ContactSegmentEntity;
    list(this: any, reqmatch?: ContactSegmentListMatch, ctrl?: Control): Promise<ContactSegmentEntity[]>;
}
export { ContactSegmentEntity };
