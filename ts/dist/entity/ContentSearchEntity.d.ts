import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ContentSearch, ContentSearchListMatch } from '../IntercomTypes';
declare class ContentSearchEntity extends IntercomEntityBase<ContentSearch> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ContentSearchEntity): ContentSearchEntity;
    list(this: any, reqmatch?: ContentSearchListMatch, ctrl?: Control): Promise<ContentSearchEntity[]>;
}
export { ContentSearchEntity };
