import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { DataConnectorExecutionResultList, DataConnectorExecutionResultListListMatch } from '../IntercomTypes';
declare class DataConnectorExecutionResultListEntity extends IntercomEntityBase<DataConnectorExecutionResultList> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: DataConnectorExecutionResultListEntity): DataConnectorExecutionResultListEntity;
    list(this: any, reqmatch?: DataConnectorExecutionResultListListMatch, ctrl?: Control): Promise<DataConnectorExecutionResultListEntity[]>;
}
export { DataConnectorExecutionResultListEntity };
