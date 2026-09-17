import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Job, JobLoadMatch, JobCreateData } from '../IntercomTypes';
declare class JobEntity extends IntercomEntityBase<Job> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: JobEntity): JobEntity;
    load(this: any, reqmatch?: JobLoadMatch, ctrl?: Control): Promise<JobEntity>;
    create(this: any, reqdata?: JobCreateData, ctrl?: Control): Promise<JobEntity>;
}
export { JobEntity };
