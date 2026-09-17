import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { DeletedInternalArticleObject, DeletedInternalArticleObjectListMatch, DeletedInternalArticleObjectCreateData, DeletedInternalArticleObjectRemoveMatch } from '../IntercomTypes';
declare class DeletedInternalArticleObjectEntity extends IntercomEntityBase<DeletedInternalArticleObject> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: DeletedInternalArticleObjectEntity): DeletedInternalArticleObjectEntity;
    list(this: any, reqmatch?: DeletedInternalArticleObjectListMatch, ctrl?: Control): Promise<DeletedInternalArticleObjectEntity[]>;
    create(this: any, reqdata?: DeletedInternalArticleObjectCreateData, ctrl?: Control): Promise<DeletedInternalArticleObjectEntity>;
    remove(this: any, reqmatch?: DeletedInternalArticleObjectRemoveMatch, ctrl?: Control): Promise<DeletedInternalArticleObjectEntity>;
}
export { DeletedInternalArticleObjectEntity };
