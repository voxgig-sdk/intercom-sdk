import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Newsfeed, NewsfeedLoadMatch, NewsfeedListMatch } from '../IntercomTypes';
declare class NewsfeedEntity extends IntercomEntityBase<Newsfeed> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: NewsfeedEntity): NewsfeedEntity;
    load(this: any, reqmatch?: NewsfeedLoadMatch, ctrl?: Control): Promise<NewsfeedEntity>;
    list(this: any, reqmatch?: NewsfeedListMatch, ctrl?: Control): Promise<NewsfeedEntity[]>;
}
export { NewsfeedEntity };
