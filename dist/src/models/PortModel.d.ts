import { BaseModel, BaseModelListener } from "./BaseModel";
import { NodeModel } from "./NodeModel";
import { LinkModel } from "./LinkModel";
export declare class PortModel extends BaseModel<BaseModelListener> {
    name: string;
    parentNode: NodeModel;
    links: {
        [id: string]: LinkModel;
    };
    constructor(name: string, type?: string, id?: string);
    deSerialize(ob: any): void;
    serialize(): {
        id: string;
    } & {
        type: string;
        selected: boolean;
    } & {
        name: string;
        parentNode: string;
        links: string[];
    };
    doClone(lookupTable: {}, clone: any): void;
    getName(): string;
    getParent(): NodeModel;
    setParentNode(node: NodeModel): void;
    removeLink(link: LinkModel): void;
    addLink(link: LinkModel): void;
    getLinks(): {
        [id: string]: LinkModel;
    };
    createLinkModel(): LinkModel | null;
    isLocked(): boolean;
}
