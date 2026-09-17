import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { TicketType, TicketTypeLoadMatch, TicketTypeListMatch, TicketTypeCreateData, TicketTypeUpdateData } from '../IntercomTypes';
declare class TicketTypeEntity extends IntercomEntityBase<TicketType> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: TicketTypeEntity): TicketTypeEntity;
    load(this: any, reqmatch?: TicketTypeLoadMatch, ctrl?: Control): Promise<TicketTypeEntity>;
    list(this: any, reqmatch?: TicketTypeListMatch, ctrl?: Control): Promise<TicketTypeEntity[]>;
    create(this: any, reqdata?: TicketTypeCreateData, ctrl?: Control): Promise<TicketTypeEntity>;
    update(this: any, reqdata?: TicketTypeUpdateData, ctrl?: Control): Promise<TicketTypeEntity>;
}
export { TicketTypeEntity };
