import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Content, ContentCreateData } from '../IntercomTypes';
declare class ContentEntity extends IntercomEntityBase<Content> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ContentEntity): ContentEntity;
    create(this: any, reqdata?: ContentCreateData, ctrl?: Control): Promise<ContentEntity>;
}
export { ContentEntity };
