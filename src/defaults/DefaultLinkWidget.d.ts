/// <reference types="react" />
import * as React from "react";
import { DiagramEngine } from "../DiagramEngine";
import { LinkModel } from "../models/LinkModel";
import { PointModel } from "../models/PointModel";
export interface DefaultLinkProps {
    color?: string;
    width?: number;
    smooth?: boolean;
    link: LinkModel;
    diagramEngine: DiagramEngine;
    pointAdded?: (point: PointModel, event: MouseEvent) => any;
}
export interface DefaultLinkState {
    selected: boolean;
}
/**
 * @author Dylan Vorster
 */
export declare class DefaultLinkWidget extends React.Component<DefaultLinkProps, DefaultLinkState> {
    static defaultProps: DefaultLinkProps;
    refLabel: HTMLElement;
    refPaths: SVGPathElement[];
    constructor(props: DefaultLinkProps);
    addPointToLink: (event: MouseEvent, index: number) => void;
    generatePoint(pointIndex: number): JSX.Element;
    generateLink(extraProps: any, id: string | number): JSX.Element;
    generateLabel(): JSX.Element;
    findPathAndRelativePositionToRenderLabel: () => {
        path: any;
        position: number;
    };
    calculateLabelPosition: () => void;
    componentDidUpdate(): void;
    componentDidMount(): void;
    generateLinePath(firstPoint: PointModel, lastPoint: PointModel): string;
    generateCurvePath(firstPoint: PointModel, lastPoint: PointModel, firstPointDelta?: number, lastPointDelta?: number): string;
    render(): JSX.Element;
}
