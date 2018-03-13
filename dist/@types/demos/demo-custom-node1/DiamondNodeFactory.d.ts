import * as SRD from "../../src/main";
import { DiamondNodeModel } from "./DiamondNodeModel";
export declare class DiamondNodeFactory extends SRD.AbstractNodeFactory {
    constructor();
    generateReactWidget(diagramEngine: SRD.DiagramEngine, node: SRD.NodeModel): JSX.Element;
    getNewInstance(): DiamondNodeModel;
}
