/* eslint-disable */
import {
	Agreement,
} from '../ddl/agreement/agreement';
import {
	AgreementESelect,
	AgreementECreateColumns,
	AgreementECreateProperties,
	AgreementEUpdateColumns,
	AgreementEUpdateProperties,
	AgreementEId,
	AgreementGraph,
	QAgreement,
} from './agreement/qagreement';
import {
	AgreementReason,
} from '../ddl/agreement/agreementreason';
import {
	AgreementReasonESelect,
	AgreementReasonECreateColumns,
	AgreementReasonECreateProperties,
	AgreementReasonEUpdateColumns,
	AgreementReasonEUpdateProperties,
	AgreementReasonEId,
	AgreementReasonGraph,
	QAgreementReason,
} from './agreement/qagreementreason';
import {
	Factor,
} from '../ddl/factor/factor';
import {
	FactorESelect,
	FactorECreateColumns,
	FactorECreateProperties,
	FactorEUpdateColumns,
	FactorEUpdateProperties,
	FactorEId,
	FactorGraph,
	QFactor,
} from './factor/qfactor';
import {
	Idea,
} from '../ddl/idea/idea';
import {
	IdeaESelect,
	IdeaECreateColumns,
	IdeaECreateProperties,
	IdeaEUpdateColumns,
	IdeaEUpdateProperties,
	IdeaEId,
	IdeaGraph,
	QIdea,
} from './idea/qidea';
import {
	IdeaLabel,
} from '../ddl/idea/idealabel';
import {
	IdeaLabelESelect,
	IdeaLabelECreateColumns,
	IdeaLabelECreateProperties,
	IdeaLabelEUpdateColumns,
	IdeaLabelEUpdateProperties,
	IdeaLabelEId,
	IdeaLabelGraph,
	QIdeaLabel,
} from './idea/qidealabel';
import {
	IdeaRating,
} from '../ddl/idea/idearating';
import {
	IdeaRatingESelect,
	IdeaRatingECreateColumns,
	IdeaRatingECreateProperties,
	IdeaRatingEUpdateColumns,
	IdeaRatingEUpdateProperties,
	IdeaRatingEId,
	IdeaRatingGraph,
	QIdeaRating,
} from './idea/qidearating';
import {
	IdeaTopic,
} from '../ddl/idea/ideatopic';
import {
	IdeaTopicESelect,
	IdeaTopicECreateColumns,
	IdeaTopicECreateProperties,
	IdeaTopicEUpdateColumns,
	IdeaTopicEUpdateProperties,
	IdeaTopicEId,
	IdeaTopicGraph,
	QIdeaTopic,
} from './idea/qideatopic';
import {
	Label,
} from '../ddl/label';
import {
	LabelESelect,
	LabelECreateColumns,
	LabelECreateProperties,
	LabelEUpdateColumns,
	LabelEUpdateProperties,
	LabelEId,
	LabelGraph,
	QLabel,
} from './qlabel';
import {
	Position,
} from '../ddl/factor/position';
import {
	PositionESelect,
	PositionECreateColumns,
	PositionECreateProperties,
	PositionEUpdateColumns,
	PositionEUpdateProperties,
	PositionEId,
	PositionGraph,
	QPosition,
} from './factor/qposition';
import {
	Reason,
} from '../ddl/idea/reason';
import {
	ReasonESelect,
	ReasonECreateColumns,
	ReasonECreateProperties,
	ReasonEUpdateColumns,
	ReasonEUpdateProperties,
	ReasonEId,
	ReasonGraph,
	QReason,
} from './idea/qreason';
import {
	SituationIdea,
} from '../ddl/idea/situationidea';
import {
	SituationIdeaESelect,
	SituationIdeaECreateColumns,
	SituationIdeaECreateProperties,
	SituationIdeaEUpdateColumns,
	SituationIdeaEUpdateProperties,
	SituationIdeaEId,
	SituationIdeaGraph,
	QSituationIdea,
} from './idea/qsituationidea';
import {
	IEntityCascadeGraph,
	IEntityCreateProperties,
	IEntityIdProperties,
	IEntitySelectProperties,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IQEntity,
} from '@airport/tarmaq-query';
import {
	IDuo,
	Duo,
} from '@airport/tarmaq-dao';
import {
	ApplicationEntity_LocalId as DbEntityId,
} from '@airport/ground-control';
import {
	Q,
	duoDiSet,
} from './qApplication';


// Application Q object Dependency Injection readiness detection Duo
export class SQDIDuo<Entity,
	EntitySelect extends IEntitySelectProperties,
	EntityCreate extends IEntityCreateProperties,
	EntityUpdateColumns extends IEntityUpdateColumns,
	EntityUpdateProperties extends IEntityUpdateProperties,
	ApplicationEntity_LocalId extends IEntityIdProperties,
	EntityCascadeGraph extends IEntityCascadeGraph,
	IQE extends IQEntity>
	extends Duo<Entity,
		EntitySelect,
		EntityCreate,
		EntityUpdateColumns,
		EntityUpdateProperties,
		ApplicationEntity_LocalId,
		EntityCascadeGraph,
		IQE> {

	constructor(
		dbEntityId: DbEntityId
	) {
		super(dbEntityId, Q)
	}
}


export interface IBaseAgreementDuo
  extends IDuo<Agreement, AgreementESelect, AgreementECreateProperties, AgreementEUpdateColumns, AgreementEUpdateProperties, AgreementEId, AgreementGraph, QAgreement> {
}

export class BaseAgreementDuo
  extends SQDIDuo<Agreement, AgreementESelect, AgreementECreateProperties, AgreementEUpdateColumns, AgreementEUpdateProperties, AgreementEId, AgreementGraph, QAgreement>
	implements IBaseAgreementDuo {

	static diSet(): boolean {
		return duoDiSet(8)
	}
	
	constructor() {
		super(8)
	}
}


export interface IBaseAgreementReasonDuo
  extends IDuo<AgreementReason, AgreementReasonESelect, AgreementReasonECreateProperties, AgreementReasonEUpdateColumns, AgreementReasonEUpdateProperties, AgreementReasonEId, AgreementReasonGraph, QAgreementReason> {
}

export class BaseAgreementReasonDuo
  extends SQDIDuo<AgreementReason, AgreementReasonESelect, AgreementReasonECreateProperties, AgreementReasonEUpdateColumns, AgreementReasonEUpdateProperties, AgreementReasonEId, AgreementReasonGraph, QAgreementReason>
	implements IBaseAgreementReasonDuo {

	static diSet(): boolean {
		return duoDiSet(7)
	}
	
	constructor() {
		super(7)
	}
}


export interface IBaseFactorDuo
  extends IDuo<Factor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor> {
}

export class BaseFactorDuo
  extends SQDIDuo<Factor, FactorESelect, FactorECreateProperties, FactorEUpdateColumns, FactorEUpdateProperties, FactorEId, FactorGraph, QFactor>
	implements IBaseFactorDuo {

	static diSet(): boolean {
		return duoDiSet(9)
	}
	
	constructor() {
		super(9)
	}
}


export interface IBaseIdeaDuo
  extends IDuo<Idea, IdeaESelect, IdeaECreateProperties, IdeaEUpdateColumns, IdeaEUpdateProperties, IdeaEId, IdeaGraph, QIdea> {
}

export class BaseIdeaDuo
  extends SQDIDuo<Idea, IdeaESelect, IdeaECreateProperties, IdeaEUpdateColumns, IdeaEUpdateProperties, IdeaEId, IdeaGraph, QIdea>
	implements IBaseIdeaDuo {

	static diSet(): boolean {
		return duoDiSet(6)
	}
	
	constructor() {
		super(6)
	}
}


export interface IBaseIdeaLabelDuo
  extends IDuo<IdeaLabel, IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel> {
}

export class BaseIdeaLabelDuo
  extends SQDIDuo<IdeaLabel, IdeaLabelESelect, IdeaLabelECreateProperties, IdeaLabelEUpdateColumns, IdeaLabelEUpdateProperties, IdeaLabelEId, IdeaLabelGraph, QIdeaLabel>
	implements IBaseIdeaLabelDuo {

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseIdeaRatingDuo
  extends IDuo<IdeaRating, IdeaRatingESelect, IdeaRatingECreateProperties, IdeaRatingEUpdateColumns, IdeaRatingEUpdateProperties, IdeaRatingEId, IdeaRatingGraph, QIdeaRating> {
}

export class BaseIdeaRatingDuo
  extends SQDIDuo<IdeaRating, IdeaRatingESelect, IdeaRatingECreateProperties, IdeaRatingEUpdateColumns, IdeaRatingEUpdateProperties, IdeaRatingEId, IdeaRatingGraph, QIdeaRating>
	implements IBaseIdeaRatingDuo {

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseIdeaTopicDuo
  extends IDuo<IdeaTopic, IdeaTopicESelect, IdeaTopicECreateProperties, IdeaTopicEUpdateColumns, IdeaTopicEUpdateProperties, IdeaTopicEId, IdeaTopicGraph, QIdeaTopic> {
}

export class BaseIdeaTopicDuo
  extends SQDIDuo<IdeaTopic, IdeaTopicESelect, IdeaTopicECreateProperties, IdeaTopicEUpdateColumns, IdeaTopicEUpdateProperties, IdeaTopicEId, IdeaTopicGraph, QIdeaTopic>
	implements IBaseIdeaTopicDuo {

	static diSet(): boolean {
		return duoDiSet(5)
	}
	
	constructor() {
		super(5)
	}
}


export interface IBaseLabelDuo
  extends IDuo<Label, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel> {
}

export class BaseLabelDuo
  extends SQDIDuo<Label, LabelESelect, LabelECreateProperties, LabelEUpdateColumns, LabelEUpdateProperties, LabelEId, LabelGraph, QLabel>
	implements IBaseLabelDuo {

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBasePositionDuo
  extends IDuo<Position, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition> {
}

export class BasePositionDuo
  extends SQDIDuo<Position, PositionESelect, PositionECreateProperties, PositionEUpdateColumns, PositionEUpdateProperties, PositionEId, PositionGraph, QPosition>
	implements IBasePositionDuo {

	static diSet(): boolean {
		return duoDiSet(10)
	}
	
	constructor() {
		super(10)
	}
}


export interface IBaseReasonDuo
  extends IDuo<Reason, ReasonESelect, ReasonECreateProperties, ReasonEUpdateColumns, ReasonEUpdateProperties, ReasonEId, ReasonGraph, QReason> {
}

export class BaseReasonDuo
  extends SQDIDuo<Reason, ReasonESelect, ReasonECreateProperties, ReasonEUpdateColumns, ReasonEUpdateProperties, ReasonEId, ReasonGraph, QReason>
	implements IBaseReasonDuo {

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseSituationIdeaDuo
  extends IDuo<SituationIdea, SituationIdeaESelect, SituationIdeaECreateProperties, SituationIdeaEUpdateColumns, SituationIdeaEUpdateProperties, SituationIdeaEId, SituationIdeaGraph, QSituationIdea> {
}

export class BaseSituationIdeaDuo
  extends SQDIDuo<SituationIdea, SituationIdeaESelect, SituationIdeaECreateProperties, SituationIdeaEUpdateColumns, SituationIdeaEUpdateProperties, SituationIdeaEId, SituationIdeaGraph, QSituationIdea>
	implements IBaseSituationIdeaDuo {

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}
