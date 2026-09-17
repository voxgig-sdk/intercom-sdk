import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { WhatsappMessageStatusList, WhatsappMessageStatusListListMatch } from '../IntercomTypes';
declare class WhatsappMessageStatusListEntity extends IntercomEntityBase<WhatsappMessageStatusList> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: WhatsappMessageStatusListEntity): WhatsappMessageStatusListEntity;
    list(this: any, reqmatch?: WhatsappMessageStatusListListMatch, ctrl?: Control): Promise<WhatsappMessageStatusListEntity[]>;
}
export { WhatsappMessageStatusListEntity };
