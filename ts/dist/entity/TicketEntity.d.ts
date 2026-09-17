import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Ticket, TicketLoadMatch, TicketCreateData, TicketUpdateData, TicketRemoveMatch } from '../IntercomTypes';
declare class TicketEntity extends IntercomEntityBase<Ticket> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: TicketEntity): TicketEntity;
    load(this: any, reqmatch?: TicketLoadMatch, ctrl?: Control): Promise<TicketEntity>;
    create(this: any, reqdata?: TicketCreateData, ctrl?: Control): Promise<TicketEntity>;
    update(this: any, reqdata?: TicketUpdateData, ctrl?: Control): Promise<TicketEntity>;
    remove(this: any, reqmatch?: TicketRemoveMatch, ctrl?: Control): Promise<TicketEntity>;
}
export { TicketEntity };
