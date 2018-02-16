import { DefaultPortModel } from "./DefaultPortModel";
import { NodeModel } from "../models/NodeModel";
/**
 * @author Dylan Vorster
 */
export declare class DefaultNodeModel extends NodeModel {
    name: string;
    color: string;
    ports: {
        [s: string]: DefaultPortModel;
    };
    constructor(name?: string, color?: string);
    deSerialize(object: any): void;
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
    } & {
        name: string;
        color: string;
    };
    getInPorts(): DefaultPortModel[];
    getOutPorts(): DefaultPortModel[];
}
