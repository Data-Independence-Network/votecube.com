import {
    domain as injectionDomain,
    IInjectionApplication
} from "@airport/di";


export const domain = injectionDomain('localhost:8000')

export function app(
    applicationName: string
): IInjectionApplication {
    return domain.app(applicationName)
}