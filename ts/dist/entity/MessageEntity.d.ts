import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Message, MessageCreateData } from '../IntercomTypes';
declare class MessageEntity extends IntercomEntityBase<Message> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: MessageEntity): MessageEntity;
    create(this: any, reqdata?: MessageCreateData, ctrl?: Control): Promise<MessageEntity>;
}
export { MessageEntity };
