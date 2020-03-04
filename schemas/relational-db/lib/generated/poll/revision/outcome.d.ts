import { IOutcomeTranslation } from './translation/outcometranslation';
import { IPollRevision } from './pollrevision';
export interface IOutcome {
    id: number;
    parentTranslation?: IOutcomeTranslation;
    parent?: IOutcome;
    children?: IOutcome[];
    pollRevisionsA?: IPollRevision[];
    pollRevisionsB?: IPollRevision[];
}