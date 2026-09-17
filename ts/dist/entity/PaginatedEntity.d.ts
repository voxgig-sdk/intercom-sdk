import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Paginated, PaginatedListMatch } from '../IntercomTypes';
declare class PaginatedEntity extends IntercomEntityBase<Paginated> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: PaginatedEntity): PaginatedEntity;
    list(this: any, reqmatch?: PaginatedListMatch, ctrl?: Control): Promise<PaginatedEntity[]>;
}
export { PaginatedEntity };
