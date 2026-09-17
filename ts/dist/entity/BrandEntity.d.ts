import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Brand, BrandLoadMatch, BrandListMatch } from '../IntercomTypes';
declare class BrandEntity extends IntercomEntityBase<Brand> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: BrandEntity): BrandEntity;
    load(this: any, reqmatch?: BrandLoadMatch, ctrl?: Control): Promise<BrandEntity>;
    list(this: any, reqmatch?: BrandListMatch, ctrl?: Control): Promise<BrandEntity[]>;
}
export { BrandEntity };
