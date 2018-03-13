import { BaseModel } from "./models/BaseModel";
import { NodeModel } from "./models/NodeModel";
import { LinkModel } from "./models/LinkModel";
import { DiagramEngine } from "./DiagramEngine";
import { PortModel } from "./models/PortModel";
import { LabelModel } from "./models/LabelModel";
export declare abstract class AbstractFactory<T extends BaseModel> {
    type: string;
    constructor(name: string);
    getType(): string;
    abstract getNewInstance(initialConfig?: any): T;
}
export declare abstract class NodeFactory<T extends NodeModel = NodeModel> extends AbstractFactory<T> {
    abstract generateReactWidget(diagramEngine: DiagramEngine, node: T): JSX.Element;
}
export declare abstract class LinkFactory<T extends LinkModel = LinkModel> extends AbstractFactory<T> {
    abstract generateReactWidget(diagramEngine: DiagramEngine, link: T): JSX.Element;
}
export declare abstract class LabelFactory<T extends LabelModel = LabelModel> extends AbstractFactory<T> {
    abstract generateReactWidget(diagramEngine: DiagramEngine, label: T): JSX.Element;
}
export declare abstract class PortFactory<T extends PortModel = PortModel> extends AbstractFactory<T> {
}
export declare class SimplePortFactory extends PortFactory {
    cb: (initialConfig?: any) => PortModel;
    constructor(type: string, cb: (initialConfig?: any) => PortModel);
    getNewInstance(initialConfig?: any): PortModel;
}
