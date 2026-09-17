import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { HelpCenter, HelpCenterLoadMatch, HelpCenterListMatch, HelpCenterCreateData, HelpCenterUpdateData, HelpCenterRemoveMatch } from '../IntercomTypes';
declare class HelpCenterEntity extends IntercomEntityBase<HelpCenter> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: HelpCenterEntity): HelpCenterEntity;
    load(this: any, reqmatch?: HelpCenterLoadMatch, ctrl?: Control): Promise<HelpCenterEntity>;
    list(this: any, reqmatch?: HelpCenterListMatch, ctrl?: Control): Promise<HelpCenterEntity[]>;
    create(this: any, reqdata?: HelpCenterCreateData, ctrl?: Control): Promise<HelpCenterEntity>;
    update(this: any, reqdata?: HelpCenterUpdateData, ctrl?: Control): Promise<HelpCenterEntity>;
    remove(this: any, reqmatch?: HelpCenterRemoveMatch, ctrl?: Control): Promise<HelpCenterEntity>;
}
export { HelpCenterEntity };
