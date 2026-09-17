import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Call, CallLoadMatch, CallListMatch, CallCreateData } from '../IntercomTypes';
declare class CallEntity extends IntercomEntityBase<Call> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: CallEntity): CallEntity;
    load(this: any, reqmatch?: CallLoadMatch, ctrl?: Control): Promise<CallEntity>;
    list(this: any, reqmatch?: CallListMatch, ctrl?: Control): Promise<CallEntity[]>;
    create(this: any, reqdata?: CallCreateData, ctrl?: Control): Promise<CallEntity>;
}
export { CallEntity };
