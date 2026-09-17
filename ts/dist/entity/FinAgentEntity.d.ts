import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { FinAgent, FinAgentCreateData } from '../IntercomTypes';
declare class FinAgentEntity extends IntercomEntityBase<FinAgent> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: FinAgentEntity): FinAgentEntity;
    create(this: any, reqdata?: FinAgentCreateData, ctrl?: Control): Promise<FinAgentEntity>;
}
export { FinAgentEntity };
