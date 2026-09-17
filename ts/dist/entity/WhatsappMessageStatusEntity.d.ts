import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { WhatsappMessageStatus, WhatsappMessageStatusLoadMatch } from '../IntercomTypes';
declare class WhatsappMessageStatusEntity extends IntercomEntityBase<WhatsappMessageStatus> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: WhatsappMessageStatusEntity): WhatsappMessageStatusEntity;
    load(this: any, reqmatch?: WhatsappMessageStatusLoadMatch, ctrl?: Control): Promise<WhatsappMessageStatusEntity>;
}
export { WhatsappMessageStatusEntity };
