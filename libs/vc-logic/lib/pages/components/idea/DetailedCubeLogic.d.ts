import { Outcome_Ordinal } from '@votecube/cube-logic';
import { ICubePosition, IUiFactor, IUiPosition, IUiIdea } from '@votecube/model';
import { ICubeLogic } from '../../../idea/CubeLogic';
import { ILogicUtils } from '../../../LogicUtils';
export declare type Position_Dir = -1 | 1;
export interface ICubeSide extends ICubePosition {
    colorRGB: string;
    factor: IUiFactor;
    outcome: Outcome_Ordinal;
    position: IUiPosition;
    textColorRGB: string;
}
export interface ICubeSideMap {
    x: {
        1?: ICubeSide;
        '-1'?: ICubeSide;
    };
    y: {
        1?: ICubeSide;
        '-1'?: ICubeSide;
    };
    z: {
        1?: ICubeSide;
        '-1'?: ICubeSide;
    };
}
export declare type SwitchToDefinition = ['x' | 'y' | 'z', -1 | 1];
export interface IDetailedCubeLogic {
    getCubeSides(idea: IUiIdea): Promise<{
        cubeSideMap: ICubeSideMap;
        cubeSides: ICubeSide[];
    }>;
    move(cubeSideMap: ICubeSideMap, cubeSide: ICubeSide, switchToDefinitions: any): void;
    switchPoles(cubeSideMap: ICubeSideMap, cubeSide: ICubeSide): void;
}
export declare class DetailedCubeLogic implements IDetailedCubeLogic {
    cubeLogic: ICubeLogic;
    logicUtils: ILogicUtils;
    getCubeSides(idea: IUiIdea): Promise<{
        cubeSideMap: ICubeSideMap;
        cubeSides: ICubeSide[];
    }>;
    move(cubeSideMap: ICubeSideMap, cubeSide: ICubeSide, switchToDefinitions: SwitchToDefinition[]): void;
    switchPoles(cubeSideMap: ICubeSideMap, cubeSide: ICubeSide): void;
    private getSwitchArray;
    private moveFactorPair;
    private movePositionPair;
}
//# sourceMappingURL=DetailedCubeLogic.d.ts.map