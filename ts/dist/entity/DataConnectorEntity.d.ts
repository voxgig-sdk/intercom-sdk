import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { DataConnector, DataConnectorLoadMatch, DataConnectorListMatch, DataConnectorCreateData, DataConnectorUpdateData } from '../IntercomTypes';
declare class DataConnectorEntity extends IntercomEntityBase<DataConnector> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: DataConnectorEntity): DataConnectorEntity;
    load(this: any, reqmatch?: DataConnectorLoadMatch, ctrl?: Control): Promise<DataConnectorEntity>;
    list(this: any, reqmatch?: DataConnectorListMatch, ctrl?: Control): Promise<DataConnectorEntity[]>;
    create(this: any, reqdata?: DataConnectorCreateData, ctrl?: Control): Promise<DataConnectorEntity>;
    update(this: any, reqdata?: DataConnectorUpdateData, ctrl?: Control): Promise<DataConnectorEntity>;
}
export { DataConnectorEntity };
