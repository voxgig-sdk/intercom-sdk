import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { TeamMetricList, TeamMetricListListMatch } from '../IntercomTypes';
declare class TeamMetricListEntity extends IntercomEntityBase<TeamMetricList> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: TeamMetricListEntity): TeamMetricListEntity;
    list(this: any, reqmatch?: TeamMetricListListMatch, ctrl?: Control): Promise<TeamMetricListEntity[]>;
}
export { TeamMetricListEntity };
