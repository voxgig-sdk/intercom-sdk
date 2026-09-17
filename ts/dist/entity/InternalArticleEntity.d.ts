import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { InternalArticle, InternalArticleLoadMatch, InternalArticleUpdateData } from '../IntercomTypes';
declare class InternalArticleEntity extends IntercomEntityBase<InternalArticle> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: InternalArticleEntity): InternalArticleEntity;
    load(this: any, reqmatch?: InternalArticleLoadMatch, ctrl?: Control): Promise<InternalArticleEntity>;
    update(this: any, reqdata?: InternalArticleUpdateData, ctrl?: Control): Promise<InternalArticleEntity>;
}
export { InternalArticleEntity };
