import { PortModel } from "../models/PortModel";
/**
 * @author Dylan Vorster
 */
export declare class DefaultPortModel extends PortModel {
    in: boolean;
    label: string;
    constructor(isInput: boolean, name: string, label?: string, id?: string);
    deSerialize(object: any): void;
    serialize(): {
        id: string;
    } & {
        type: string;
        selected: boolean;
    } & {
        name: string;
        parentNode: string;
        links: string[];
    } & {
        in: boolean;
        label: string;
    };
}
