import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { CompanyList, CompanyListCreateData } from '../IntercomTypes';
declare class CompanyListEntity extends IntercomEntityBase<CompanyList> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: CompanyListEntity): CompanyListEntity;
    create(this: any, reqdata?: CompanyListCreateData, ctrl?: Control): Promise<CompanyListEntity>;
}
export { CompanyListEntity };
