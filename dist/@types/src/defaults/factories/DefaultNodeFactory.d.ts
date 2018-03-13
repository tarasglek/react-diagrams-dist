import { DefaultNodeModel } from "../models/DefaultNodeModel";
import { DiagramEngine } from "../../DiagramEngine";
import { NodeFactory } from "../../AbstractFactory";
/**
 * @author Dylan Vorster
 */
export declare class DefaultNodeFactory extends NodeFactory<DefaultNodeModel> {
    constructor();
    generateReactWidget(diagramEngine: DiagramEngine, node: DefaultNodeModel): JSX.Element;
    getNewInstance(initialConfig?: any): DefaultNodeModel;
}
