import { domain as injectionDomain } from "@airport/direction-indicator";
export const domain = injectionDomain('localhost:8000');
export function app(applicationName) {
    return domain.app(applicationName);
}
//# sourceMappingURL=index.js.map