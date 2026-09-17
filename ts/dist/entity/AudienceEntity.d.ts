import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Audience, AudienceLoadMatch, AudienceListMatch, AudienceCreateData, AudienceUpdateData, AudienceRemoveMatch } from '../IntercomTypes';
declare class AudienceEntity extends IntercomEntityBase<Audience> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: AudienceEntity): AudienceEntity;
    load(this: any, reqmatch?: AudienceLoadMatch, ctrl?: Control): Promise<AudienceEntity>;
    list(this: any, reqmatch?: AudienceListMatch, ctrl?: Control): Promise<AudienceEntity[]>;
    create(this: any, reqdata?: AudienceCreateData, ctrl?: Control): Promise<AudienceEntity>;
    update(this: any, reqdata?: AudienceUpdateData, ctrl?: Control): Promise<AudienceEntity>;
    remove(this: any, reqmatch?: AudienceRemoveMatch, ctrl?: Control): Promise<AudienceEntity>;
}
export { AudienceEntity };
