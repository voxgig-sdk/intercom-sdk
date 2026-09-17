import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { NewsItem, NewsItemLoadMatch, NewsItemCreateData, NewsItemUpdateData } from '../IntercomTypes';
declare class NewsItemEntity extends IntercomEntityBase<NewsItem> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: NewsItemEntity): NewsItemEntity;
    load(this: any, reqmatch?: NewsItemLoadMatch, ctrl?: Control): Promise<NewsItemEntity>;
    create(this: any, reqdata?: NewsItemCreateData, ctrl?: Control): Promise<NewsItemEntity>;
    update(this: any, reqdata?: NewsItemUpdateData, ctrl?: Control): Promise<NewsItemEntity>;
}
export { NewsItemEntity };
