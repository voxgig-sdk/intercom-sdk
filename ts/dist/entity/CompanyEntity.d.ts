import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Company, CompanyLoadMatch, CompanyListMatch, CompanyCreateData, CompanyUpdateData, CompanyRemoveMatch } from '../IntercomTypes';
declare class CompanyEntity extends IntercomEntityBase<Company> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: CompanyEntity): CompanyEntity;
    load(this: any, reqmatch?: CompanyLoadMatch, ctrl?: Control): Promise<CompanyEntity>;
    list(this: any, reqmatch?: CompanyListMatch, ctrl?: Control): Promise<CompanyEntity[]>;
    create(this: any, reqdata?: CompanyCreateData, ctrl?: Control): Promise<CompanyEntity>;
    update(this: any, reqdata?: CompanyUpdateData, ctrl?: Control): Promise<CompanyEntity>;
    remove(this: any, reqmatch?: CompanyRemoveMatch, ctrl?: Control): Promise<CompanyEntity>;
}
export { CompanyEntity };
