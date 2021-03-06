import { custom } from './custom';
import { email } from './email';
import { greaterThanOrEquals } from './greaterThanOrEquals';
import { minDate } from './minDate';
import { minLength } from './minLength';
import { minTomorrow } from './minTomorrow';
import { password } from './password';
import { required } from './required';
import { username } from './username';
export const Validators = {
    custom,
    email,
    greaterThanOrEquals,
    minDate,
    minLength,
    minTomorrow,
    password,
    required,
    username
};
export function filterToRangeValidators(validators) {
    return validators.filter(validator => ['min', 'max', 'greaterThanOrEquals'].indexOf(validator.type) > -1);
}
export function isPositiveInteger(value) {
    return /^[1-9][0-9]*$/.test(value);
}
//# sourceMappingURL=Validator.js.map