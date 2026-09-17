import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { DeletedArticleObject, DeletedArticleObjectRemoveMatch } from '../IntercomTypes';
declare class DeletedArticleObjectEntity extends IntercomEntityBase<DeletedArticleObject> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: DeletedArticleObjectEntity): DeletedArticleObjectEntity;
    remove(this: any, reqmatch?: DeletedArticleObjectRemoveMatch, ctrl?: Control): Promise<DeletedArticleObjectEntity>;
}
export { DeletedArticleObjectEntity };
