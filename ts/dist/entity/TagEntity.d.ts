import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Tag, TagLoadMatch, TagListMatch, TagCreateData, TagRemoveMatch } from '../IntercomTypes';
declare class TagEntity extends IntercomEntityBase<Tag> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: TagEntity): TagEntity;
    load(this: any, reqmatch?: TagLoadMatch, ctrl?: Control): Promise<TagEntity>;
    list(this: any, reqmatch?: TagListMatch, ctrl?: Control): Promise<TagEntity[]>;
    create(this: any, reqdata?: TagCreateData, ctrl?: Control): Promise<TagEntity>;
    remove(this: any, reqmatch?: TagRemoveMatch, ctrl?: Control): Promise<TagEntity>;
}
export { TagEntity };
