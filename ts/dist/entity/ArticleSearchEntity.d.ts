import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ArticleSearch, ArticleSearchLoadMatch } from '../IntercomTypes';
declare class ArticleSearchEntity extends IntercomEntityBase<ArticleSearch> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ArticleSearchEntity): ArticleSearchEntity;
    load(this: any, reqmatch?: ArticleSearchLoadMatch, ctrl?: Control): Promise<ArticleSearchEntity>;
}
export { ArticleSearchEntity };
