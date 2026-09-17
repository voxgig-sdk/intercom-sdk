import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { CompanyScroll, CompanyScrollListMatch } from '../IntercomTypes';
declare class CompanyScrollEntity extends IntercomEntityBase<CompanyScroll> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: CompanyScrollEntity): CompanyScrollEntity;
    list(this: any, reqmatch?: CompanyScrollListMatch, ctrl?: Control): Promise<CompanyScrollEntity[]>;
}
export { CompanyScrollEntity };
