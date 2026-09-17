import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ConversationParticipant, ConversationParticipantCreateData, ConversationParticipantRemoveMatch } from '../IntercomTypes';
declare class ConversationParticipantEntity extends IntercomEntityBase<ConversationParticipant> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ConversationParticipantEntity): ConversationParticipantEntity;
    create(this: any, reqdata?: ConversationParticipantCreateData, ctrl?: Control): Promise<ConversationParticipantEntity>;
    remove(this: any, reqmatch?: ConversationParticipantRemoveMatch, ctrl?: Control): Promise<ConversationParticipantEntity>;
}
export { ConversationParticipantEntity };
