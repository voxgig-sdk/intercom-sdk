import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Segment, SegmentLoadMatch, SegmentListMatch } from '../IntercomTypes';
declare class SegmentEntity extends IntercomEntityBase<Segment> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: SegmentEntity): SegmentEntity;
    load(this: any, reqmatch?: SegmentLoadMatch, ctrl?: Control): Promise<SegmentEntity>;
    list(this: any, reqmatch?: SegmentListMatch, ctrl?: Control): Promise<SegmentEntity[]>;
}
export { SegmentEntity };
