import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { DataConnectorExecutionResult, DataConnectorExecutionResultLoadMatch } from '../IntercomTypes';
declare class DataConnectorExecutionResultEntity extends IntercomEntityBase<DataConnectorExecutionResult> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: DataConnectorExecutionResultEntity): DataConnectorExecutionResultEntity;
    load(this: any, reqmatch?: DataConnectorExecutionResultLoadMatch, ctrl?: Control): Promise<DataConnectorExecutionResultEntity>;
}
export { DataConnectorExecutionResultEntity };
