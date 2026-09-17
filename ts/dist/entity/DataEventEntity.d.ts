import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { DataEvent, DataEventCreateData } from '../IntercomTypes';
declare class DataEventEntity extends IntercomEntityBase<DataEvent> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: DataEventEntity): DataEventEntity;
    create(this: any, reqdata?: DataEventCreateData, ctrl?: Control): Promise<DataEventEntity>;
}
export { DataEventEntity };
