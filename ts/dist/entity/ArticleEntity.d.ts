import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Article, ArticleLoadMatch, ArticleListMatch, ArticleCreateData, ArticleUpdateData } from '../IntercomTypes';
declare class ArticleEntity extends IntercomEntityBase<Article> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ArticleEntity): ArticleEntity;
    load(this: any, reqmatch?: ArticleLoadMatch, ctrl?: Control): Promise<ArticleEntity>;
    list(this: any, reqmatch?: ArticleListMatch, ctrl?: Control): Promise<ArticleEntity[]>;
    create(this: any, reqdata?: ArticleCreateData, ctrl?: Control): Promise<ArticleEntity>;
    update(this: any, reqdata?: ArticleUpdateData, ctrl?: Control): Promise<ArticleEntity>;
}
export { ArticleEntity };
