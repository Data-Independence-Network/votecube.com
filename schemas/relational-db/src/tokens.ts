import {system}                  from '@airport/di'
// import {IFactorDao}               from './dao/factor/FactorDao'
// import {IPollDao}                 from './dao/poll/PollDao'
// import {ILabelDao}                from './dao/poll/variation/label/LabelDao'
// import {IVoteDao}                 from './dao/vote/VoteDao'
import {IPollFactorPositionDuo}   from './duo/poll/PollFactorPositionDuo'
import {IBasePollLTFContinentDuo} from './generated/baseDuos'

const relationalDb = system("votecube-ui").lib("relational-db")

//
// export const FACTOR_DAO               = relationalDb.token<IFactorDao>()
// export const LABEL_DAO                = relationalDb.token<ILabelDao>()
// export const POLL_DAO                 = relationalDb.token<IPollDao>()
export const POLL_FACTOR_POSITION_DUO = relationalDb.token<IPollFactorPositionDuo>()
export const POLL_CONTINENT_DUO       = relationalDb.token<IBasePollLTFContinentDuo>()
// export const VOTE_DAO                 = relationalDb.token<IVoteDao>()