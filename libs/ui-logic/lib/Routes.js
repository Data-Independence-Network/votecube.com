var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import page from 'page';
import { get } from 'svelte/store';
import { currentPage, currentUrl, lastPage, lastUrl, routeParams, showSignIn, signedInState, user } from './store';
import { Injected } from '@airport/direction-indicator';
let Routes = class Routes {
    constructor() {
        this.defaultRouteParams = {
            mode: 'build'
        };
        this.pageConf = {};
    }
    // private topMenuComp: Component
    configPages(config) {
        this.pageConf = {};
        for (const pathConfig of config) {
            const key = pathConfig[0];
            this.pageConf[key] = {
                authenticated: pathConfig[1],
                key,
                rightMenu: pathConfig[2],
                url: key
            };
        }
    }
    getPageComponent() {
        return this.pageComp;
    }
    // getTopMenuComponent(): Component {
    // 	return this.topMenuComp
    // }
    navigateToPage(pageKey, paramMap = this.defaultRouteParams) {
        const nextPage = this.pageConf[pageKey];
        this.setInProgressState(paramMap, nextPage.url);
        // FIXME: transition navigation to saper
        this.navigateAndPostToAIRport(this.inProgressUrl);
        const previousPage = get(currentPage);
        currentPage.set(nextPage);
        lastPage.set(previousPage);
        const previousUrl = get(currentUrl);
        currentUrl.set(nextPage.url);
        lastUrl.set(previousUrl);
        routeParams.set(paramMap);
    }
    navigateAndPostToAIRport(url, callback) {
        page(url, callback);
    }
    setupRoutes(pageMap, setPageComp, defaultRoutePath, errorRoutePath) {
        this.setupPage(this.pageConf[defaultRoutePath], pageMap[defaultRoutePath], setPageComp, errorRoutePath, '/');
        for (const pageKey in this.pageConf) {
            this.setupPage(this.pageConf[pageKey], pageMap[pageKey], setPageComp, errorRoutePath);
        }
        this.navigateAndPostToAIRport({
            hashbang: true
        });
    }
    setInProgressState(paramMap, url) {
        this.inProgressUrl = '' + url;
        this.inProgressParams = paramMap;
        if (paramMap) {
            for (const paramKey in paramMap) {
                this.inProgressUrl = this.inProgressUrl.replace(':' + paramKey, paramMap[paramKey]);
            }
        }
    }
    setPageComp(theCurrentPage, theCurrentUrl, theRouteParams, PageComp, setPageComp) {
        this.pageComp = PageComp;
        currentPage.set(theCurrentPage);
        currentUrl.set(theCurrentUrl);
        routeParams.set(theRouteParams);
        setPageComp(PageComp);
    }
    setupPage(pageConfig, PageComp, setPageComp, errorRoutePath, url = pageConfig.url) {
        page(url, (context) => {
            let currentUser = get(user);
            let params = this.inProgressParams;
            let nextUrl = this.inProgressUrl;
            // if (!this.inProgressUrl) {
            params = this.inProgressParams = context.params;
            nextUrl = this.inProgressUrl = context.path;
            // }
            if (!pageConfig.authenticated || currentUser) {
                this.setPageComp(pageConfig, nextUrl, params, PageComp, setPageComp);
                return;
            }
            if (currentUser) {
                this.setPageComp(pageConfig, nextUrl, params, PageComp, setPageComp);
                return;
            }
            // Give Firebase Auth a bit of time to react
            setTimeout(() => {
                currentUser = get(user);
                if (currentUser) {
                    this.setPageComp(pageConfig, nextUrl, params, PageComp, setPageComp);
                    return;
                }
                showSignIn.set(true);
                const signedInStateUnsubscribe = signedInState.subscribe(({ changed, current }) => {
                    if (changed.authChecked && current.user) {
                        setTimeout(() => {
                            signedInStateUnsubscribe();
                            showSignIn.set(false);
                            this.setPageComp(pageConfig, nextUrl, params, PageComp, setPageComp);
                        });
                        return;
                    }
                    if (!changed.showSignIn || current.showSignIn) {
                        return;
                    }
                    setTimeout(() => {
                        signedInStateUnsubscribe();
                        showSignIn.set(!current.user);
                        this.setPageComp(pageConfig, nextUrl, params, PageComp, setPageComp);
                        // if (current.user) {
                        // } else {
                        // 	// const previousPage = get(lastPage)
                        // 	// const previousUrl = get(lastUrl)
                        // 	// if (!previousPage || previousPage.authenticated) {
                        // 	// 	navigateToPage(IDEA_LIST)
                        // 	// } else if (previousUrl) {
                        // 	// 	this.navigateAndPostToAIRport(previousUrl)
                        // 	// }
                        // 	if (!current.currentPage || current.currentPage.authenticated) {
                        // 		this.navigateToPage(errorRoutePath)
                        // 	} else if (current.currentUrl) {
                        // 		this.navigateAndPostToAIRport(current.currentUrl)
                        // 	}
                        // }
                    });
                });
            }, 400);
        });
    }
};
Routes = __decorate([
    Injected()
], Routes);
export { Routes };
//# sourceMappingURL=Routes.js.map