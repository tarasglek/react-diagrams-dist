/// <reference types="react" />
import * as React from "react";
import { DiagramEngine } from "../DiagramEngine";
import { NodeModel } from "../models/NodeModel";
export interface NodeProps {
    node: NodeModel;
    children?: any;
    diagramEngine: DiagramEngine;
}
export interface NodeState {
}
/**
 * @author Dylan Vorster
 */
export declare class NodeWidget extends React.Component<NodeProps, NodeState> {
    constructor(props: NodeProps);
    shouldComponentUpdate(): boolean;
    render(): JSX.Element;
}
