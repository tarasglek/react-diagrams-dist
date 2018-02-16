import { BaseModel, BaseModelListener } from "./BaseModel";
import { PortModel } from "./PortModel";
export declare class NodeModel extends BaseModel<BaseModelListener> {
    x: number;
    y: number;
    extras: any;
    ports: {
        [s: string]: PortModel;
    };
    constructor(nodeType?: string, id?: string);
    setPosition(x: any, y: any): void;
    getSelectedEntities(): BaseModel<BaseModelListener>[];
    deSerialize(ob: any): void;
    serialize(): {
        id: string;
    } & {
        type: string;
        selected: boolean;
    } & {
        x: number;
        y: number;
        extras: any;
        ports: ({
            id: string;
        } & {
            type: string;
            selected: boolean;
        } & {
            name: string;
            parentNode: string;
            links: string[];
        })[];
    };
    doClone(lookupTable: {}, clone: any): void;
    remove(): void;
    getPortFromID(id: any): PortModel | null;
    getPort(name: string): PortModel | null;
    getPorts(): {
        [s: string]: PortModel;
    };
    removePort(port: PortModel): void;
    addPort(port: PortModel): PortModel;
}
