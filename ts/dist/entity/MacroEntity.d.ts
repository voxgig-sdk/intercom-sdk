import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Macro, MacroLoadMatch, MacroListMatch } from '../IntercomTypes';
declare class MacroEntity extends IntercomEntityBase<Macro> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: MacroEntity): MacroEntity;
    load(this: any, reqmatch?: MacroLoadMatch, ctrl?: Control): Promise<MacroEntity>;
    list(this: any, reqmatch?: MacroListMatch, ctrl?: Control): Promise<MacroEntity[]>;
}
export { MacroEntity };
