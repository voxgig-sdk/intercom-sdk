import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { InternalArticleSearch, InternalArticleSearchLoadMatch } from '../IntercomTypes';
declare class InternalArticleSearchEntity extends IntercomEntityBase<InternalArticleSearch> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: InternalArticleSearchEntity): InternalArticleSearchEntity;
    load(this: any, reqmatch?: InternalArticleSearchLoadMatch, ctrl?: Control): Promise<InternalArticleSearchEntity>;
}
export { InternalArticleSearchEntity };
