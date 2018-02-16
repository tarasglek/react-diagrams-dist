/// <reference types="react" />
import { DiagramEngine } from "../DiagramEngine";
import { LinkModel } from "../models/LinkModel";
import { LinkFactory } from "../AbstractFactory";
/**
 * @author Dylan Vorster
 */
export declare class DefaultLinkFactory extends LinkFactory {
    constructor();
    generateReactWidget(diagramEngine: DiagramEngine, link: LinkModel): JSX.Element;
    getNewInstance(initialConfig?: any): LinkModel;
}
