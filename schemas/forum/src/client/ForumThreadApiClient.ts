import { IOC } from "@airport/di"
import { FORUM_THREAD_API } from ".";

export class ForumThreadApiClient {

    async doSomething(
        someInput
    ): Promise<void> {
        const forumThreadApi = await IOC.get(FORUM_THREAD_API)

        //     return await forumThreadApi.doSomething(someInput)
    }


}