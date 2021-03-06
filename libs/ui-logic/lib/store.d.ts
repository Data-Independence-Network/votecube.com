import { Readable } from 'svelte/store';
import { IRouteConfig } from './Routes';
export interface ITextToast {
    seconds: number;
    text: string;
    time: number;
}
export interface IToggleStore extends Readable<boolean> {
    toggle(): void;
}
export interface ITextToastStore extends Readable<ITextToast> {
    toggle(newText: string, seconds?: number): void;
}
export interface IUserInfo {
    password: string;
    username: string;
}
export declare let authChecked: import("svelte/store").Writable<boolean>;
export declare let cardMove: import("svelte/store").Writable<{
    move: number;
    moved: number[];
}>;
export declare let checkSizeIntervalId: import("svelte/store").Writable<number>;
export declare let cube: import("svelte/store").Writable<boolean>;
export declare let currentPage: import("svelte/store").Writable<IRouteConfig>;
export declare let currentUrl: import("svelte/store").Writable<string>;
export declare let emInPx: import("svelte/store").Writable<number>;
export declare let forms: import("svelte/store").Writable<any>;
export declare let isDesktop: import("svelte/store").Writable<boolean>;
export declare let lastPage: import("svelte/store").Writable<IRouteConfig>;
export declare let lastUrl: import("svelte/store").Writable<string>;
export declare let mode: import("svelte/store").Writable<string>;
export declare let noOverflow: import("svelte/store").Writable<boolean>;
export declare let pageTitle: import("svelte/store").Writable<string>;
export declare let popup: import("svelte/store").Writable<boolean>;
export declare let portalHeight: import("svelte/store").Writable<number>;
export declare let resized: import("svelte/store").Writable<boolean>;
export declare let routeParams: import("svelte/store").Writable<{
    [key: string]: string;
}>;
export declare let showConfirm: import("svelte/store").Writable<boolean>;
export declare let showMainMenu: IToggleStore;
export declare let showSignIn: import("svelte/store").Writable<boolean>;
export declare let text: import("svelte/store").Writable<any>;
export declare let textToast: ITextToastStore;
export declare const topMenuShown: IToggleStore;
export declare let user: import("svelte/store").Writable<IUserInfo>;
export declare let verticalLayout: import("svelte/store").Writable<boolean>;
export declare let windowWidth: import("svelte/store").Writable<number>;
export declare let showTopMenu: Readable<boolean>;
export interface ISignedInStateChanged {
    authChecked: boolean;
    currentPage: boolean;
    currentUrl: boolean;
    showSignIn: boolean;
    user: boolean;
}
export interface ISignedInStateCurrent {
    authChecked: boolean;
    currentPage: IRouteConfig;
    currentUrl: string;
    showSignIn: boolean;
    user: IUserInfo;
}
export interface ISignedInState {
    changed: ISignedInStateChanged;
    current: ISignedInStateCurrent;
}
export declare let signedInState: Readable<ISignedInState>;
//# sourceMappingURL=store.d.ts.map