import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Email, EmailLoadMatch, EmailListMatch } from '../IntercomTypes';
declare class EmailEntity extends IntercomEntityBase<Email> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: EmailEntity): EmailEntity;
    load(this: any, reqmatch?: EmailLoadMatch, ctrl?: Control): Promise<EmailEntity>;
    list(this: any, reqmatch?: EmailListMatch, ctrl?: Control): Promise<EmailEntity[]>;
}
export { EmailEntity };
