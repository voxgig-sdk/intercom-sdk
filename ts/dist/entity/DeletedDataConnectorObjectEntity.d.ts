import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { DeletedDataConnectorObject, DeletedDataConnectorObjectRemoveMatch } from '../IntercomTypes';
declare class DeletedDataConnectorObjectEntity extends IntercomEntityBase<DeletedDataConnectorObject> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: DeletedDataConnectorObjectEntity): DeletedDataConnectorObjectEntity;
    remove(this: any, reqmatch?: DeletedDataConnectorObjectRemoveMatch, ctrl?: Control): Promise<DeletedDataConnectorObjectEntity>;
}
export { DeletedDataConnectorObjectEntity };
