import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { TicketTypeAttribute, TicketTypeAttributeCreateData, TicketTypeAttributeUpdateData } from '../IntercomTypes';
declare class TicketTypeAttributeEntity extends IntercomEntityBase<TicketTypeAttribute> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: TicketTypeAttributeEntity): TicketTypeAttributeEntity;
    create(this: any, reqdata?: TicketTypeAttributeCreateData, ctrl?: Control): Promise<TicketTypeAttributeEntity>;
    update(this: any, reqdata?: TicketTypeAttributeUpdateData, ctrl?: Control): Promise<TicketTypeAttributeEntity>;
}
export { TicketTypeAttributeEntity };
