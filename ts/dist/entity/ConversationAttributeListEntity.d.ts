import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ConversationAttributeList, ConversationAttributeListListMatch } from '../IntercomTypes';
declare class ConversationAttributeListEntity extends IntercomEntityBase<ConversationAttributeList> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ConversationAttributeListEntity): ConversationAttributeListEntity;
    list(this: any, reqmatch?: ConversationAttributeListListMatch, ctrl?: Control): Promise<ConversationAttributeListEntity[]>;
}
export { ConversationAttributeListEntity };
