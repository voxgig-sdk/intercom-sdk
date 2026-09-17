import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { ContactList, ContactListCreateData } from '../IntercomTypes';
declare class ContactListEntity extends IntercomEntityBase<ContactList> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: ContactListEntity): ContactListEntity;
    create(this: any, reqdata?: ContactListCreateData, ctrl?: Control): Promise<ContactListEntity>;
}
export { ContactListEntity };
