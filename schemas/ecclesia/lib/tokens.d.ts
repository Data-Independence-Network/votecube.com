import { IPollDao } from './dao/poll/PollDao';
import { IPollRevisionDao } from './dao/poll/revision/PollRevisionDao';
import { IUserAccountDao } from './dao/user/UserAccountDao';
import { IPollFactorPositionRevisionDuo } from './duo/poll/PollRevisionFactorPositionDuo';
import { IUserAccountDuo } from './duo/user/UserAccountDuo';
import { IBasePollRunContinentDuo } from './generated/baseDuos';
export declare const POLL_DAO: import("@airport/di").IDiToken<IPollDao>;
export declare const POLL_REVISION_DAO: import("@airport/di").IDiToken<IPollRevisionDao>;
export declare const POLL_FACTOR_POSITION_REVISION_DUO: import("@airport/di").IDiToken<IPollFactorPositionRevisionDuo>;
export declare const POLL_CONTINENT_DUO: import("@airport/di").IDiToken<IBasePollRunContinentDuo>;
export declare const USER_ACCOUNT_DAO: import("@airport/di").IDiToken<IUserAccountDao>;
export declare const USER_ACCOUNT_DUO: import("@airport/di").IDiToken<IUserAccountDuo>;
//# sourceMappingURL=tokens.d.ts.map