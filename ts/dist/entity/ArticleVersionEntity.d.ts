import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ArticleVersion, ArticleVersionLoadMatch } from '../IntercomTypes';
declare class ArticleVersionEntity extends IntercomEntityBase<ArticleVersion> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ArticleVersionEntity): ArticleVersionEntity;
    load(this: any, reqmatch?: ArticleVersionLoadMatch, ctrl?: Control): Promise<ArticleVersionEntity>;
}
export { ArticleVersionEntity };
