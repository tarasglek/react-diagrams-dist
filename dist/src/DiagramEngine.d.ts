/// <reference types="react" />
import { BaseEntity, BaseListener } from "./BaseEntity";
import { DiagramModel } from "./models/DiagramModel";
import { BaseModel, BaseModelListener } from "./models/BaseModel";
import { NodeModel } from "./models/NodeModel";
import { PortModel } from "./models/PortModel";
import { LinkModel } from "./models/LinkModel";
import { LinkFactory, NodeFactory, PortFactory } from "./AbstractFactory";
/**
 * @author Dylan Vorster
 */
export interface DiagramEngineListener extends BaseListener {
    portFactoriesUpdated?(): void;
    nodeFactoriesUpdated?(): void;
    linkFactoriesUpdated?(): void;
    repaintCanvas?(): void;
}
/**
 * Passed as a parameter to the DiagramWidget
 */
export declare class DiagramEngine extends BaseEntity<DiagramEngineListener> {
    nodeFactories: {
        [s: string]: NodeFactory;
    };
    linkFactories: {
        [s: string]: LinkFactory;
    };
    portFactories: {
        [s: string]: PortFactory;
    };
    diagramModel: DiagramModel;
    canvas: Element;
    paintableWidgets: {};
    linksThatHaveInitiallyRendered: {};
    nodesRendered: boolean;
    maxNumberPointsPerLink: number;
    constructor();
    installDefaultFactories(): void;
    repaintCanvas(): void;
    clearRepaintEntities(): void;
    enableRepaintEntities(entities: BaseModel<BaseModelListener>[]): void;
    /**
     * Checks to see if a model is locked by running through
     * its parents to see if they are locked first
     */
    isModelLocked(model: BaseEntity<BaseListener>): boolean;
    recalculatePortsVisually(): void;
    canEntityRepaint(baseModel: BaseModel<BaseModelListener>): boolean;
    setCanvas(canvas: Element | null): void;
    setDiagramModel(model: DiagramModel): void;
    getDiagramModel(): DiagramModel;
    getNodeFactories(): {
        [s: string]: NodeFactory;
    };
    getLinkFactories(): {
        [s: string]: LinkFactory;
    };
    registerPortFactory(factory: PortFactory): void;
    registerNodeFactory(factory: NodeFactory): void;
    registerLinkFactory(factory: LinkFactory): void;
    getPortFactory(type: string): PortFactory;
    getNodeFactory(type: string): NodeFactory;
    getLinkFactory(type: string): LinkFactory;
    getFactoryForNode(node: NodeModel): NodeFactory | null;
    getFactoryForLink(link: LinkModel): LinkFactory | null;
    generateWidgetForLink(link: LinkModel): JSX.Element | null;
    generateWidgetForNode(node: NodeModel): JSX.Element | null;
    getRelativeMousePoint(event: any): {
        x: number;
        y: number;
    };
    getRelativePoint(x: any, y: any): {
        x: number;
        y: number;
    };
    getNodePortElement(port: PortModel): any;
    getPortCenter(port: PortModel): {
        x: number;
        y: number;
    };
    getMaxNumberPointsPerLink(): number;
    setMaxNumberPointsPerLink(max: number): void;
    zoomToFit(): void;
}
