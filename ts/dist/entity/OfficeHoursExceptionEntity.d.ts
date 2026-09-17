import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { OfficeHoursException, OfficeHoursExceptionLoadMatch, OfficeHoursExceptionListMatch, OfficeHoursExceptionCreateData, OfficeHoursExceptionUpdateData } from '../IntercomTypes';
declare class OfficeHoursExceptionEntity extends IntercomEntityBase<OfficeHoursException> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: OfficeHoursExceptionEntity): OfficeHoursExceptionEntity;
    load(this: any, reqmatch?: OfficeHoursExceptionLoadMatch, ctrl?: Control): Promise<OfficeHoursExceptionEntity>;
    list(this: any, reqmatch?: OfficeHoursExceptionListMatch, ctrl?: Control): Promise<OfficeHoursExceptionEntity[]>;
    create(this: any, reqdata?: OfficeHoursExceptionCreateData, ctrl?: Control): Promise<OfficeHoursExceptionEntity>;
    update(this: any, reqdata?: OfficeHoursExceptionUpdateData, ctrl?: Control): Promise<OfficeHoursExceptionEntity>;
}
export { OfficeHoursExceptionEntity };
