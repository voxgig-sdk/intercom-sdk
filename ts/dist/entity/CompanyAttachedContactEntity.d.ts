import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { CompanyAttachedContact, CompanyAttachedContactListMatch } from '../IntercomTypes';
declare class CompanyAttachedContactEntity extends IntercomEntityBase<CompanyAttachedContact> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: CompanyAttachedContactEntity): CompanyAttachedContactEntity;
    list(this: any, reqmatch?: CompanyAttachedContactListMatch, ctrl?: Control): Promise<CompanyAttachedContactEntity[]>;
}
export { CompanyAttachedContactEntity };
