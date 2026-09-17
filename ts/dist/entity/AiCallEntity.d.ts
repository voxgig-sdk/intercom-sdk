import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { AiCall, AiCallLoadMatch, AiCallCreateData } from '../IntercomTypes';
declare class AiCallEntity extends IntercomEntityBase<AiCall> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: AiCallEntity): AiCallEntity;
    load(this: any, reqmatch?: AiCallLoadMatch, ctrl?: Control): Promise<AiCallEntity>;
    create(this: any, reqdata?: AiCallCreateData, ctrl?: Control): Promise<AiCallEntity>;
}
export { AiCallEntity };
