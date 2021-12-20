import {
    API_REGISTRY,
} from '@airport/check-in'
import { container, DI } from '@airport/di'
import { APPLICATION_INITIALIZER } from '@airport/landing'
import {
    APPLICATION_LOADER,
    IApplicationLoader,
    JsonApplicationWithLastIds,
    LastIds
} from '@airport/security-check'
import { DDL_OBJECT_RETRIEVER } from '@airport/takeoff'
import { domain } from '@votecube/dependency-injection'
import { APPLICATION } from './generated/application'

export class ApplicationLoader
    implements IApplicationLoader {

    private initializing = false

    async load(
        lastIds: LastIds,
        librarySignature: string = 'forum',
    ): Promise<void> {
        if (this.initializing) {
            return
        }
        this.initializing = true

        DI.db().context.inAIRportApp = true

        const [apiRegistry, ddlObjectRetriever, applicationInitializer] = await container(this)
            .get(API_REGISTRY, DDL_OBJECT_RETRIEVER, APPLICATION_INITIALIZER)
        ddlObjectRetriever.lastIds = lastIds

        await applicationInitializer.initializeForAIRportApp(APPLICATION as any)

        apiRegistry.initialize(APPLICATION.versions[0].api)

        domain.mapApplicationBySignature('forum', librarySignature)
    }

    getApplication(): JsonApplicationWithLastIds {
        return APPLICATION as any
    }
}
DI.set(APPLICATION_LOADER, ApplicationLoader)

export function loadApplicationInitializer() {
    console.log('Application Initializer loaded')
}