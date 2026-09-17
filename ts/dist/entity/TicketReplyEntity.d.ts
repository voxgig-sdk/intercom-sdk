import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { TicketReply, TicketReplyCreateData } from '../IntercomTypes';
declare class TicketReplyEntity extends IntercomEntityBase<TicketReply> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: TicketReplyEntity): TicketReplyEntity;
    create(this: any, reqdata?: TicketReplyCreateData, ctrl?: Control): Promise<TicketReplyEntity>;
}
export { TicketReplyEntity };
