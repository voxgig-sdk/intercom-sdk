import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ConversationList, ConversationListCreateData } from '../IntercomTypes';
declare class ConversationListEntity extends IntercomEntityBase<ConversationList> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ConversationListEntity): ConversationListEntity;
    create(this: any, reqdata?: ConversationListCreateData, ctrl?: Control): Promise<ConversationListEntity>;
}
export { ConversationListEntity };
