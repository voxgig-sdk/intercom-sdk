import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { OfficeHour, OfficeHourListMatch, OfficeHourCreateData, OfficeHourRemoveMatch } from '../IntercomTypes';
declare class OfficeHourEntity extends IntercomEntityBase<OfficeHour> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: OfficeHourEntity): OfficeHourEntity;
    list(this: any, reqmatch?: OfficeHourListMatch, ctrl?: Control): Promise<OfficeHourEntity[]>;
    create(this: any, reqdata?: OfficeHourCreateData, ctrl?: Control): Promise<OfficeHourEntity>;
    remove(this: any, reqmatch?: OfficeHourRemoveMatch, ctrl?: Control): Promise<OfficeHourEntity>;
}
export { OfficeHourEntity };
