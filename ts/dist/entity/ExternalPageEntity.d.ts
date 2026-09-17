import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ExternalPage, ExternalPageLoadMatch, ExternalPageListMatch, ExternalPageCreateData, ExternalPageUpdateData, ExternalPageRemoveMatch } from '../IntercomTypes';
declare class ExternalPageEntity extends IntercomEntityBase<ExternalPage> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ExternalPageEntity): ExternalPageEntity;
    load(this: any, reqmatch?: ExternalPageLoadMatch, ctrl?: Control): Promise<ExternalPageEntity>;
    list(this: any, reqmatch?: ExternalPageListMatch, ctrl?: Control): Promise<ExternalPageEntity[]>;
    create(this: any, reqdata?: ExternalPageCreateData, ctrl?: Control): Promise<ExternalPageEntity>;
    update(this: any, reqdata?: ExternalPageUpdateData, ctrl?: Control): Promise<ExternalPageEntity>;
    remove(this: any, reqmatch?: ExternalPageRemoveMatch, ctrl?: Control): Promise<ExternalPageEntity>;
}
export { ExternalPageEntity };
