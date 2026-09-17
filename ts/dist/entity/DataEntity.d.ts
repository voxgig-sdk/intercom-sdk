import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Data, DataLoadMatch, DataCreateData } from '../IntercomTypes';
declare class DataEntity extends IntercomEntityBase<Data> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: DataEntity): DataEntity;
    load(this: any, reqmatch?: DataLoadMatch, ctrl?: Control): Promise<DataEntity>;
    create(this: any, reqdata?: DataCreateData, ctrl?: Control): Promise<DataEntity>;
}
export { DataEntity };
