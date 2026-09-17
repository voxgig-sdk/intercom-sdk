import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ContentSnippet, ContentSnippetLoadMatch, ContentSnippetListMatch, ContentSnippetCreateData, ContentSnippetUpdateData, ContentSnippetRemoveMatch } from '../IntercomTypes';
declare class ContentSnippetEntity extends IntercomEntityBase<ContentSnippet> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ContentSnippetEntity): ContentSnippetEntity;
    load(this: any, reqmatch?: ContentSnippetLoadMatch, ctrl?: Control): Promise<ContentSnippetEntity>;
    list(this: any, reqmatch?: ContentSnippetListMatch, ctrl?: Control): Promise<ContentSnippetEntity[]>;
    create(this: any, reqdata?: ContentSnippetCreateData, ctrl?: Control): Promise<ContentSnippetEntity>;
    update(this: any, reqdata?: ContentSnippetUpdateData, ctrl?: Control): Promise<ContentSnippetEntity>;
    remove(this: any, reqmatch?: ContentSnippetRemoveMatch, ctrl?: Control): Promise<ContentSnippetEntity>;
}
export { ContentSnippetEntity };
