import { DiagramModel } from "./models/DiagramModel";
import { DiagramEngine } from "./DiagramEngine";
import { SelectionModel } from "./widgets/DiagramWidget";
export declare class BaseAction {
    mouseX: number;
    mouseY: number;
    ms: number;
    constructor(mouseX: number, mouseY: number);
}
export declare class SelectingAction extends BaseAction {
    mouseX2: number;
    mouseY2: number;
    constructor(mouseX: number, mouseY: number);
    getBoxDimensions(): {
        left: number;
        top: number;
        width: number;
        height: number;
        right: number;
        bottom: number;
    };
    containsElement(x: number, y: number, diagramModel: DiagramModel): boolean;
}
export declare class MoveCanvasAction extends BaseAction {
    initialOffsetX: number;
    initialOffsetY: number;
    constructor(mouseX: number, mouseY: number, diagramModel: DiagramModel);
}
export declare class MoveItemsAction extends BaseAction {
    selectionModels: SelectionModel[];
    moved: boolean;
    constructor(mouseX: number, mouseY: number, diagramEngine: DiagramEngine);
}
