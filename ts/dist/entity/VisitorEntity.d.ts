import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Visitor, VisitorLoadMatch, VisitorUpdateData } from '../IntercomTypes';
declare class VisitorEntity extends IntercomEntityBase<Visitor> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: VisitorEntity): VisitorEntity;
    load(this: any, reqmatch?: VisitorLoadMatch, ctrl?: Control): Promise<VisitorEntity>;
    update(this: any, reqdata?: VisitorUpdateData, ctrl?: Control): Promise<VisitorEntity>;
}
export { VisitorEntity };
