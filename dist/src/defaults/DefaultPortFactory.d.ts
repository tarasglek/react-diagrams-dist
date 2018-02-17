import { DefaultPortModel } from "./DefaultPortModel";
import { PortFactory } from "../AbstractFactory";
export declare class DefaultPortFactory extends PortFactory<DefaultPortModel> {
    constructor();
    getNewInstance(initialConfig?: any): DefaultPortModel;
}
