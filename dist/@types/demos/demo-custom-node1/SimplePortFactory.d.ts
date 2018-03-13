import { PortModel, AbstractPortFactory } from "../../src/main";
export declare class SimplePortFactory extends AbstractPortFactory {
    cb: (initialConfig?: any) => PortModel;
    constructor(type: string, cb: (initialConfig?: any) => PortModel);
    getNewInstance(initialConfig?: any): PortModel;
}
