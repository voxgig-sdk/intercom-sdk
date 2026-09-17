import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { TicketList, TicketListCreateData } from '../IntercomTypes';
declare class TicketListEntity extends IntercomEntityBase<TicketList> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: TicketListEntity): TicketListEntity;
    create(this: any, reqdata?: TicketListCreateData, ctrl?: Control): Promise<TicketListEntity>;
}
export { TicketListEntity };
