export function minDate(date // UTC only
) {
    const minDateOfMonth = date.getUTCDate();
    const minMonth = date.getUTCMonth();
    const minYear = date.getUTCFullYear();
    const validator = ((field) => {
        if (!field.fragments.valid
            || field.displayValue === null) {
            return null;
        }
        const selection = field.selection;
        if (selection.year < minYear
            || (selection.year === minYear
                && (selection.month < minMonth
                    || (selection.month === minMonth
                        && selection.date < minDateOfMonth)))) {
            return {
                key: 'min'
            };
        }
    });
    validator.type = 'min';
    return validator;
}
//# sourceMappingURL=minDate.js.map