import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { AiContent, AiContentRemoveMatch } from '../IntercomTypes';
declare class AiContentEntity extends IntercomEntityBase<AiContent> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: AiContentEntity): AiContentEntity;
    remove(this: any, reqmatch?: AiContentRemoveMatch, ctrl?: Control): Promise<AiContentEntity>;
}
export { AiContentEntity };
