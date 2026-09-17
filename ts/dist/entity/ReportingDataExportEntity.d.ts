import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ReportingDataExport, ReportingDataExportListMatch, ReportingDataExportCreateData } from '../IntercomTypes';
declare class ReportingDataExportEntity extends IntercomEntityBase<ReportingDataExport> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ReportingDataExportEntity): ReportingDataExportEntity;
    list(this: any, reqmatch?: ReportingDataExportListMatch, ctrl?: Control): Promise<ReportingDataExportEntity[]>;
    create(this: any, reqdata?: ReportingDataExportCreateData, ctrl?: Control): Promise<ReportingDataExportEntity>;
}
export { ReportingDataExportEntity };
