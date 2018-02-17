/// <reference types="react" />
import * as React from "react";
import { DiagramEngine } from "../DiagramEngine";
export interface NodeLayerProps {
    diagramEngine: DiagramEngine;
}
export interface NodeLayerState {
}
/**
 * @author Dylan Vorster
 */
export declare class NodeLayerWidget extends React.Component<NodeLayerProps, NodeLayerState> {
    constructor(props: NodeLayerProps);
    componentDidUpdate(): void;
    render(): JSX.Element;
}
