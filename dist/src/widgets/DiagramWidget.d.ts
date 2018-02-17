/// <reference types="react" />
import * as React from "react";
import { DiagramEngine } from "../DiagramEngine";
import { BaseAction } from "../CanvasActions";
import { BaseModel, BaseModelListener } from "../models/BaseModel";
export interface SelectionModel {
    model: BaseModel<BaseModelListener>;
    initialX: number;
    initialY: number;
}
export interface DiagramProps {
    diagramEngine: DiagramEngine;
    allowLooseLinks?: boolean;
    allowCanvasTranslation?: boolean;
    allowCanvasZoom?: boolean;
    inverseZoom?: boolean;
    maxNumberPointsPerLink?: number;
    actionStartedFiring?: (action: BaseAction) => boolean;
    actionStillFiring?: (action: BaseAction) => void;
    actionStoppedFiring?: (action: BaseAction) => void;
    deleteKeys?: number[];
}
export interface DiagramState {
    action: BaseAction | null;
    wasMoved: boolean;
    renderedNodes: boolean;
    windowListener: any;
    diagramEngineListener: any;
    document: any;
}
/**
 * @author Dylan Vorster
 */
export declare class DiagramWidget extends React.Component<DiagramProps, DiagramState> {
    static defaultProps: DiagramProps;
    constructor(props: DiagramProps);
    onKeyUpPointer: null;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: DiagramProps): void;
    componentWillUpdate(nextProps: DiagramProps): void;
    componentDidUpdate(): void;
    componentDidMount(): void;
    /**
     * Gets a model and element under the mouse cursor
     */
    getMouseElement(event: any): {
        model: BaseModel<BaseModelListener>;
        element: Element;
    };
    fireAction(): void;
    stopFiringAction(shouldSkipEvent?: boolean): void;
    startFiringAction(action: BaseAction): void;
    onMouseMove(event: any): void;
    onKeyUp(event: any): void;
    onMouseUp(event: any): void;
    drawSelectionBox(): JSX.Element;
    render(): JSX.Element;
}
