import { DiagramEngine } from "../../DiagramEngine";
import { LabelFactory } from "../../AbstractFactory";
import { DefaultLabelModel } from "../models/DefaultLabelModel";
/**
 * @author Dylan Vorster
 */
export declare class DefaultLabelFactory extends LabelFactory<DefaultLabelModel> {
    constructor();
    generateReactWidget(diagramEngine: DiagramEngine, label: DefaultLabelModel): JSX.Element;
    getNewInstance(initialConfig?: any): DefaultLabelModel;
}
