import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { BannerDismiss, BannerDismissCreateData } from '../IntercomTypes';
declare class BannerDismissEntity extends IntercomEntityBase<BannerDismiss> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: BannerDismissEntity): BannerDismissEntity;
    create(this: any, reqdata?: BannerDismissCreateData, ctrl?: Control): Promise<BannerDismissEntity>;
}
export { BannerDismissEntity };
