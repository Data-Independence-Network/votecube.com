import {DI}            from '@airport/di'
import {
	mutationApi,
	setPositionData
}                      from '@votecube/cube-logic'
import {VOTE_DAO}      from '@votecube/public-db'
import {loadCubeLogic} from './libs/cubeLogic'

export async function init() {
	// await DI.get(AIR_DB)
	// const dbManager = await DI.get(DATABASE_MANAGER)
	// await dbManager.init('votecube.com', StoreType.SQLITE_CORDOVA, SCHEMA)
}

export async function setupCubeView(
	pollId,
	page
) {
	const [
		      setPositionDataAndMove,
		      voteDao
	      ] = await Promise.all([
		loadCubeLogic(page, () => {
			page.set({delta: page.get().delta + 1})
		}),
		await DI.get(VOTE_DAO)
	])

	const vote = await voteDao.findMyVoteForPoll(pollId)

	if (!vote) {
		if (pollId === 0) {
			routes.navigateToPage(routes.POLL_INFO_MAIN)
		}
		return
	}
	setPositionData(vote)
	mutationApi.recompute()
	const poll = vote.poll
	page.set({poll, vote})
	setPositionDataAndMove(vote)

	page.store.set({
		pageTitle: poll.name
	})
}
