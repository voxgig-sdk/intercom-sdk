import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ContactAttachedCompany, ContactAttachedCompanyListMatch } from '../IntercomTypes';
declare class ContactAttachedCompanyEntity extends IntercomEntityBase<ContactAttachedCompany> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ContactAttachedCompanyEntity): ContactAttachedCompanyEntity;
    list(this: any, reqmatch?: ContactAttachedCompanyListMatch, ctrl?: Control): Promise<ContactAttachedCompanyEntity[]>;
}
export { ContactAttachedCompanyEntity };
