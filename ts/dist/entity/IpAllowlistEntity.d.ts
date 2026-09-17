import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { IpAllowlist, IpAllowlistListMatch, IpAllowlistUpdateData } from '../IntercomTypes';
declare class IpAllowlistEntity extends IntercomEntityBase<IpAllowlist> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: IpAllowlistEntity): IpAllowlistEntity;
    list(this: any, reqmatch?: IpAllowlistListMatch, ctrl?: Control): Promise<IpAllowlistEntity[]>;
    update(this: any, reqdata?: IpAllowlistUpdateData, ctrl?: Control): Promise<IpAllowlistEntity>;
}
export { IpAllowlistEntity };
