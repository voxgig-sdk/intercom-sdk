import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ArticleVersionList, ArticleVersionListListMatch } from '../IntercomTypes';
declare class ArticleVersionListEntity extends IntercomEntityBase<ArticleVersionList> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ArticleVersionListEntity): ArticleVersionListEntity;
    list(this: any, reqmatch?: ArticleVersionListListMatch, ctrl?: Control): Promise<ArticleVersionListEntity[]>;
}
export { ArticleVersionListEntity };
