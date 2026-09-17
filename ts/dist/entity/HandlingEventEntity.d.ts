import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { HandlingEvent, HandlingEventListMatch } from '../IntercomTypes';
declare class HandlingEventEntity extends IntercomEntityBase<HandlingEvent> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: HandlingEventEntity): HandlingEventEntity;
    list(this: any, reqmatch?: HandlingEventListMatch, ctrl?: Control): Promise<HandlingEventEntity[]>;
}
export { HandlingEventEntity };
