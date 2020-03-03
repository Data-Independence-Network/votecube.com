import { DI } from '@airport/di';
import { POLL_FORM_MANAGER } from '../../tokens';
export class PollFormManager {
    fromForm(form) {
        const outcomes = form.outcomes;
        const formThemeValue = form.theme;
        const variationFromForm = {
            factors: {
                1: this.toPollFactorFromForm(form.factors[1]),
                2: this.toPollFactorFromForm(form.factors[2]),
                3: this.toPollFactorFromForm(form.factors[3]),
            },
            name: form.name,
            outcomes: {
                A: {
                    name: outcomes.A
                },
                B: {
                    name: outcomes.B
                }
            },
            theme: {
                id: formThemeValue ? formThemeValue.id : null,
                name: formThemeValue ? formThemeValue.text : ''
            }
        };
        return variationFromForm;
    }
    toForm(data) {
        const themeData = data.theme;
        const theme = {
            id: themeData.id,
            text: themeData.name
        };
        return {
            factors: {
                1: this.toPollFactorForm(data.factors[1]),
                2: this.toPollFactorForm(data.factors[2]),
                3: this.toPollFactorForm(data.factors[3])
            },
            name: data.name,
            outcomes: {
                A: data.outcomes.A.name,
                B: data.outcomes.B.name
            },
            theme
        };
    }
    toPollFactorForm(factorData) {
        return {
            color: factorData.color,
            name: factorData.name,
            positions: {
                A: factorData.positions.A.name,
                B: factorData.positions.B.name
            }
        };
    }
    toPollFactorFromForm(factorForm) {
        return {
            color: {
                blue: parseInt(factorForm.color.blue),
                green: parseInt(factorForm.color.green),
                red: parseInt(factorForm.color.red),
            },
            name: factorForm.name,
            positions: {
                A: {
                    name: factorForm.positions.A
                },
                B: {
                    name: factorForm.positions.B
                }
            }
        };
    }
}
DI.set(POLL_FORM_MANAGER, PollFormManager);
//# sourceMappingURL=PollFormManager.js.map