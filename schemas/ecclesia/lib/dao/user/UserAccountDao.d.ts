import { BaseUserAccountDao, IBaseUserAccountDao, IUserAccount } from '../../generated/generated';
import { IVotecubeContext } from '../../index';
import { UserAccount_PasswordHash, UserAccount_UserName } from '../../types/types';
export interface IUserAccountDao extends IBaseUserAccountDao {
    signUp(userName: UserAccount_UserName, passwordHash: UserAccount_PasswordHash, context: IVotecubeContext): Promise<IUserAccount>;
    findByUsername(userName: UserAccount_UserName, context: IVotecubeContext): Promise<IUserAccount>;
}
export declare class UserAccountDao extends BaseUserAccountDao implements IUserAccountDao {
    signUp(userName: UserAccount_UserName, passwordHash: UserAccount_PasswordHash, context: IVotecubeContext): Promise<IUserAccount>;
    findByUsername(userName: UserAccount_UserName, context: IVotecubeContext): Promise<IUserAccount>;
}
//# sourceMappingURL=UserAccountDao.d.ts.map