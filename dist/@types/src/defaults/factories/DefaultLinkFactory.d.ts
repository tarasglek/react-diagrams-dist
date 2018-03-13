import { DefaultLinkWidget } from "../widgets/DefaultLinkWidget";
import { DiagramEngine } from "../../DiagramEngine";
import { LinkFactory } from "../../AbstractFactory";
import { DefaultLinkModel } from "../models/DefaultLinkModel";
/**
 * @author Dylan Vorster
 */
export declare class DefaultLinkFactory extends LinkFactory<DefaultLinkModel> {
    constructor();
    generateReactWidget(diagramEngine: DiagramEngine, link: DefaultLinkModel): JSX.Element;
    getNewInstance(initialConfig?: any): DefaultLinkModel;
    generateLinkSegment(model: DefaultLinkModel, widget: DefaultLinkWidget, selected: boolean, path: string): JSX.Element;
}
