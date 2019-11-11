import {
	DocStatus,
	IFullTextSearch,
	IMarked,
	IMarks,
	IsData,
	IsDelta,
	IsDoc,
	Key
}                   from './common'
import {
	ICoreAgeSuitabilityTracked,
	IDocumentValue
}                   from './DocumentValue'
import {
	ICoreFactorFromForm,
	ICoreMarkedFactor
}                   from './Factor'
import {
	ICoreOutcome,
	ICoreOutcomeFromForm
}                   from './Outcome'
import {IVersioned} from './PathFragment'
import {
	PollKey,
	PollName
}                   from './Poll'
import {
	ICoreTheme,
	ICoreThemeFromForm
}                   from './Theme'

export type VariationKey = Key

export interface ICoreVariation<Doc extends DocStatus>
	extends ICoreAgeSuitabilityTracked<Doc>,
	        ICoreVariationFromForm<Doc>,
	        IFullTextSearch,
	        IVersioned<VariationKey> {

	factors: {
		1: ICoreMarkedFactor<Doc>
		2: ICoreMarkedFactor<Doc>
		3: ICoreMarkedFactor<Doc>
		marks: IMarks
	}
	marks: IMarks
	outcomes: {
		A: ICoreOutcome<Doc> & IMarked
		B: ICoreOutcome<Doc> & IMarked
		marks: IMarks
	}
	pollKey: PollKey
	theme: ICoreTheme<Doc>

}

export interface ICoreVariationFromForm<Doc extends DocStatus = IsData> {

	factors: {
		1: ICoreFactorFromForm<Doc>
		2: ICoreFactorFromForm<Doc>
		3: ICoreFactorFromForm<Doc>
	}
	name: Doc extends IsDoc ? IDocumentValue<PollName>
		: Doc extends IsDelta ? boolean : PollName
	outcomes: {
		A: ICoreOutcomeFromForm<Doc>
		B: ICoreOutcomeFromForm<Doc>
	}
	theme: ICoreThemeFromForm

}
