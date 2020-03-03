import { LabelRule } from './field/Field';
export { FragmentType } from './field/date/DateFragments';
export { IDateField, IMutableDateState } from './field/date/DateField';
export { IMatchingField } from './field/MatchingField';
export { IColorChangeFlag, IColorChangeFlags, IColorField } from './field/ColorField';
export { LabelRule, IFieldRules, IFieldText, IValidate, IDetect, IField } from './field/Field';
export { IFieldError, IComponent, IFieldBase } from './field/FieldBase';
export { IFieldMap, IFieldValidityMap, IFieldGroupText, IFieldGroupingText, IFieldGroup } from './field/FieldGroup';
export { IFieldOption, IOptionsField, IOptionFieldRules } from './field/OptionsField';
export { IValidator, IValidators, IErrorsText } from './validator/Validator';
export * from './tokens';
export * from './FormFactory';
export interface IConstants {
    rules: IRuleConstants;
}
export interface IRuleConstants {
    label: typeof LabelRule;
}
export declare const CONSTS: IConstants;