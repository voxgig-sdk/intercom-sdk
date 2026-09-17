import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { DataExport, DataExportCreateData } from '../IntercomTypes';
declare class DataExportEntity extends IntercomEntityBase<DataExport> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: DataExportEntity): DataExportEntity;
    create(this: any, reqdata?: DataExportCreateData, ctrl?: Control): Promise<DataExportEntity>;
}
export { DataExportEntity };
