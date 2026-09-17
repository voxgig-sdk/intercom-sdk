import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Workflow, WorkflowLoadMatch } from '../IntercomTypes';
declare class WorkflowEntity extends IntercomEntityBase<Workflow> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: WorkflowEntity): WorkflowEntity;
    load(this: any, reqmatch?: WorkflowLoadMatch, ctrl?: Control): Promise<WorkflowEntity>;
}
export { WorkflowEntity };
