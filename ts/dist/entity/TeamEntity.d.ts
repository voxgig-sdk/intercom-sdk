import { IntercomEntityBase } from '../IntercomEntityBase';
import type { IntercomSDK } from '../IntercomSDK';
import type { Control } from '../types';
import type { Team, TeamLoadMatch, TeamListMatch } from '../IntercomTypes';
declare class TeamEntity extends IntercomEntityBase<Team> {
    constructor(client: IntercomSDK, entopts: any);
    make(this: TeamEntity): TeamEntity;
    load(this: any, reqmatch?: TeamLoadMatch, ctrl?: Control): Promise<TeamEntity>;
    list(this: any, reqmatch?: TeamListMatch, ctrl?: Control): Promise<TeamEntity[]>;
}
export { TeamEntity };
