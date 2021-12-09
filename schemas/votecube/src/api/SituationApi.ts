import { Api } from "@airport/check-in";
import {
    container,
    DI
} from "@airport/di";
import { IRepositoryIdentifier } from "../client/types";
import type {
    ILabel,
    ISituation
} from "../server";
import { SITUATION_API } from "../tokens";
import { SITUATION_DAO } from "../server-tokens";

export interface ISituationApi {

    getSituationsForLabels(
        labels: ILabel[]
    ): Promise<ISituation[]>

    getLeafSituations(
        situation: ISituation
    ): Promise<ISituation[]>

    getStemSituation(
        situation: ISituation
    ): Promise<ISituation>

    getSituation(
        repositorySource: string,
        situationRepositoryUuId: string
    ): Promise<ISituation>

    saveSituation(
        situation: ISituation,
        createNewRepository: boolean
    ): Promise<IRepositoryIdentifier>

}

/**
 * Version 1 situation retrieval across devices.
 * 
 * - no search capabilities (Vespa is not yet integrated)
 * - a repository private (writable) repository transaction log is maintained in ScyllaDb
 * - the private Uuid of the user hardcoded
 * - the transaction logs for a given repository are retrieved by user private Uuid and
 *       the repositoryUuid
 * - on-going record retrieval also accepts "sinceTime" parameter that retrieves only
 * the logs entered since that time
 * 
 * Thus - the search for  a situation is done via a repositoryUuid.  AIRport retrieves
 * the entire reposiory and then does a local search for all Situations that have that
 * repository id and returns the first one found (there should only be one).
 */

export class SituationApi
    implements ISituationApi {

    @Api()
    async getSituationsForLabels(
        labels: ILabel[]
    ): Promise<ISituation[]> {
        return []
    }

    @Api()
    async getLeafSituations(
        situation: ISituation
    ): Promise<ISituation[]> {
        return []
    }

    @Api()
    async getStemSituation(
        situation: ISituation
    ): Promise<ISituation> {
        return null
    }

    @Api()
    async getSituation(
        repositorySource: string,
        situationRepositoryUuId: string
    ): Promise<ISituation> {
        const situationDao = await container(this).get(SITUATION_DAO)

        return await situationDao.findByRepositoryUuId(repositorySource, situationRepositoryUuId)
    }

    @Api()
    async saveSituation(
        situation: ISituation,
        createNewRepository: boolean
    ): Promise<IRepositoryIdentifier> {
        const situationDao = await container(this).get(SITUATION_DAO)

        return await situationDao.saveSituation(situation, createNewRepository)
    }

}
DI.set(SITUATION_API, SituationApi)
