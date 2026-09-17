import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { DataAttribute, DataAttributeListMatch, DataAttributeCreateData, DataAttributeUpdateData } from '../IntercomTypes';
declare class DataAttributeEntity extends IntercomEntityBase<DataAttribute> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: DataAttributeEntity): DataAttributeEntity;
    list(this: any, reqmatch?: DataAttributeListMatch, ctrl?: Control): Promise<DataAttributeEntity[]>;
    create(this: any, reqdata?: DataAttributeCreateData, ctrl?: Control): Promise<DataAttributeEntity>;
    update(this: any, reqdata?: DataAttributeUpdateData, ctrl?: Control): Promise<DataAttributeEntity>;
}
export { DataAttributeEntity };
