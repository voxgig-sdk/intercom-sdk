import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { DeletedCompanyObject, DeletedCompanyObjectRemoveMatch } from '../IntercomTypes';
declare class DeletedCompanyObjectEntity extends IntercomEntityBase<DeletedCompanyObject> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: DeletedCompanyObjectEntity): DeletedCompanyObjectEntity;
    remove(this: any, reqmatch?: DeletedCompanyObjectRemoveMatch, ctrl?: Control): Promise<DeletedCompanyObjectEntity>;
}
export { DeletedCompanyObjectEntity };
