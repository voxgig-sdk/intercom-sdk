import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { DeletedObject, DeletedObjectRemoveMatch } from '../IntercomTypes';
declare class DeletedObjectEntity extends IntercomEntityBase<DeletedObject> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: DeletedObjectEntity): DeletedObjectEntity;
    remove(this: any, reqmatch?: DeletedObjectRemoveMatch, ctrl?: Control): Promise<DeletedObjectEntity>;
}
export { DeletedObjectEntity };
