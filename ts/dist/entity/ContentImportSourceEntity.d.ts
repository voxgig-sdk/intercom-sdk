import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ContentImportSource, ContentImportSourceLoadMatch, ContentImportSourceListMatch, ContentImportSourceCreateData, ContentImportSourceUpdateData } from '../IntercomTypes';
declare class ContentImportSourceEntity extends IntercomEntityBase<ContentImportSource> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ContentImportSourceEntity): ContentImportSourceEntity;
    load(this: any, reqmatch?: ContentImportSourceLoadMatch, ctrl?: Control): Promise<ContentImportSourceEntity>;
    list(this: any, reqmatch?: ContentImportSourceListMatch, ctrl?: Control): Promise<ContentImportSourceEntity[]>;
    create(this: any, reqdata?: ContentImportSourceCreateData, ctrl?: Control): Promise<ContentImportSourceEntity>;
    update(this: any, reqdata?: ContentImportSourceUpdateData, ctrl?: Control): Promise<ContentImportSourceEntity>;
}
export { ContentImportSourceEntity };
