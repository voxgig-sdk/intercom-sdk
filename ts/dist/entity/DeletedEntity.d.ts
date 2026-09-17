import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Deleted, DeletedListMatch } from '../IntercomTypes';
declare class DeletedEntity extends IntercomEntityBase<Deleted> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: DeletedEntity): DeletedEntity;
    list(this: any, reqmatch?: DeletedListMatch, ctrl?: Control): Promise<DeletedEntity[]>;
}
export { DeletedEntity };
