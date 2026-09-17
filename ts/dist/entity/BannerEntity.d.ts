import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Banner, BannerListMatch } from '../IntercomTypes';
declare class BannerEntity extends IntercomEntityBase<Banner> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: BannerEntity): BannerEntity;
    list(this: any, reqmatch?: BannerListMatch, ctrl?: Control): Promise<BannerEntity[]>;
}
export { BannerEntity };
