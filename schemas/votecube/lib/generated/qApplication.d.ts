import { QApplication } from '@airport/aviation-communication';
import { DbApplication, ApplicationEntity_LocalId } from '@airport/ground-control';
import { QAgreement } from './agreement/qagreement';
import { QAgreementReason } from './agreement/qagreementreason';
import { QFactor } from './factor/qfactor';
import { QIdea } from './idea/qidea';
import { QIdeaLabel } from './idea/qidealabel';
import { QIdeaRating } from './idea/qidearating';
import { QIdeaTopic } from './idea/qideatopic';
import { QLabel } from './qlabel';
import { QPosition } from './factor/qposition';
import { QReason } from './idea/qreason';
import { QSituationIdea } from './idea/qsituationidea';
export interface LocalQApplication extends QApplication {
    db: DbApplication;
    Agreement: QAgreement;
    AgreementReason: QAgreementReason;
    Factor: QFactor;
    Idea: QIdea;
    IdeaLabel: QIdeaLabel;
    IdeaRating: QIdeaRating;
    IdeaTopic: QIdeaTopic;
    Label: QLabel;
    Position: QPosition;
    Reason: QReason;
    SituationIdea: QSituationIdea;
}
export declare const Q_APPLICATION: LocalQApplication;
export declare const Q: LocalQApplication;
export declare function diSet(dbEntityId: ApplicationEntity_LocalId): boolean;
export declare function duoDiSet(dbEntityId: ApplicationEntity_LocalId): boolean;
//# sourceMappingURL=qApplication.d.ts.map