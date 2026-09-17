import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { OfficeHoursSchedule, OfficeHoursScheduleLoadMatch, OfficeHoursScheduleUpdateData } from '../IntercomTypes';
declare class OfficeHoursScheduleEntity extends IntercomEntityBase<OfficeHoursSchedule> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: OfficeHoursScheduleEntity): OfficeHoursScheduleEntity;
    load(this: any, reqmatch?: OfficeHoursScheduleLoadMatch, ctrl?: Control): Promise<OfficeHoursScheduleEntity>;
    update(this: any, reqdata?: OfficeHoursScheduleUpdateData, ctrl?: Control): Promise<OfficeHoursScheduleEntity>;
}
export { OfficeHoursScheduleEntity };
