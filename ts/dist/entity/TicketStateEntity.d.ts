import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { TicketState, TicketStateListMatch } from '../IntercomTypes';
declare class TicketStateEntity extends IntercomEntityBase<TicketState> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: TicketStateEntity): TicketStateEntity;
    list(this: any, reqmatch?: TicketStateListMatch, ctrl?: Control): Promise<TicketStateEntity[]>;
}
export { TicketStateEntity };
