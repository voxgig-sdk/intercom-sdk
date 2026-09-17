import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { SideConversation, SideConversationListMatch } from '../IntercomTypes';
declare class SideConversationEntity extends IntercomEntityBase<SideConversation> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: SideConversationEntity): SideConversationEntity;
    list(this: any, reqmatch?: SideConversationListMatch, ctrl?: Control): Promise<SideConversationEntity[]>;
}
export { SideConversationEntity };
