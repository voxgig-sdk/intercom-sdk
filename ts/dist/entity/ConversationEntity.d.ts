import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Conversation, ConversationLoadMatch, ConversationListMatch, ConversationCreateData, ConversationUpdateData, ConversationRemoveMatch } from '../IntercomTypes';
declare class ConversationEntity extends IntercomEntityBase<Conversation> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ConversationEntity): ConversationEntity;
    load(this: any, reqmatch?: ConversationLoadMatch, ctrl?: Control): Promise<ConversationEntity>;
    list(this: any, reqmatch?: ConversationListMatch, ctrl?: Control): Promise<ConversationEntity[]>;
    create(this: any, reqdata?: ConversationCreateData, ctrl?: Control): Promise<ConversationEntity>;
    update(this: any, reqdata?: ConversationUpdateData, ctrl?: Control): Promise<ConversationEntity>;
    remove(this: any, reqmatch?: ConversationRemoveMatch, ctrl?: Control): Promise<ConversationEntity>;
}
export { ConversationEntity };
