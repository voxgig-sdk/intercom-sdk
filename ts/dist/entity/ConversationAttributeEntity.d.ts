import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ConversationAttribute, ConversationAttributeLoadMatch, ConversationAttributeCreateData, ConversationAttributeUpdateData, ConversationAttributeRemoveMatch } from '../IntercomTypes';
declare class ConversationAttributeEntity extends IntercomEntityBase<ConversationAttribute> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ConversationAttributeEntity): ConversationAttributeEntity;
    load(this: any, reqmatch?: ConversationAttributeLoadMatch, ctrl?: Control): Promise<ConversationAttributeEntity>;
    create(this: any, reqdata?: ConversationAttributeCreateData, ctrl?: Control): Promise<ConversationAttributeEntity>;
    update(this: any, reqdata?: ConversationAttributeUpdateData, ctrl?: Control): Promise<ConversationAttributeEntity>;
    remove(this: any, reqmatch?: ConversationAttributeRemoveMatch, ctrl?: Control): Promise<ConversationAttributeEntity>;
}
export { ConversationAttributeEntity };
