import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { CustomObjectInstance, CustomObjectInstanceLoadMatch, CustomObjectInstanceCreateData, CustomObjectInstanceRemoveMatch } from '../IntercomTypes';
declare class CustomObjectInstanceEntity extends IntercomEntityBase<CustomObjectInstance> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: CustomObjectInstanceEntity): CustomObjectInstanceEntity;
    load(this: any, reqmatch?: CustomObjectInstanceLoadMatch, ctrl?: Control): Promise<CustomObjectInstanceEntity>;
    create(this: any, reqdata?: CustomObjectInstanceCreateData, ctrl?: Control): Promise<CustomObjectInstanceEntity>;
    remove(this: any, reqmatch?: CustomObjectInstanceRemoveMatch, ctrl?: Control): Promise<CustomObjectInstanceEntity>;
}
export { CustomObjectInstanceEntity };
