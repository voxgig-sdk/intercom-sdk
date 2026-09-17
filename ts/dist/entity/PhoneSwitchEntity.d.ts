import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { PhoneSwitch, PhoneSwitchCreateData } from '../IntercomTypes';
declare class PhoneSwitchEntity extends IntercomEntityBase<PhoneSwitch> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: PhoneSwitchEntity): PhoneSwitchEntity;
    create(this: any, reqdata?: PhoneSwitchCreateData, ctrl?: Control): Promise<PhoneSwitchEntity>;
}
export { PhoneSwitchEntity };
