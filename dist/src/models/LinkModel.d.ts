import { BaseModel, BaseModelListener } from "./BaseModel";
import { PortModel } from "./PortModel";
import { PointModel } from "./PointModel";
import { BaseEvent } from "../BaseEntity";
export interface LinkModelListener extends BaseModelListener {
    sourcePortChanged?(event: BaseEvent<LinkModel> & {
        port: null | PortModel;
    }): void;
    targetPortChanged?(event: BaseEvent<LinkModel> & {
        port: null | PortModel;
    }): void;
}
export declare class LinkModel extends BaseModel<LinkModelListener> {
    sourcePort: PortModel | null;
    targetPort: PortModel | null;
    label: string;
    points: PointModel[];
    extras: {};
    constructor(linkType?: string, id?: string);
    deSerialize(ob: any): void;
    serialize(): {
        id: string;
    } & {
        type: string;
        selected: boolean;
    } & {
        source: string;
        sourcePort: string;
        target: string;
        targetPort: string;
        points: ({
            id: string;
        } & {
            type: string;
            selected: boolean;
        } & {
            x: number;
            y: number;
        })[];
        extras: {};
        label: string;
    };
    doClone(lookupTable: {}, clone: any): void;
    remove(): void;
    isLastPoint(point: PointModel): boolean;
    getPointIndex(point: PointModel): number;
    getPointModel(id: string): PointModel | null;
    getPortForPoint(point: PointModel): PortModel;
    getPointForPort(port: PortModel): PointModel;
    getFirstPoint(): PointModel;
    getLastPoint(): PointModel;
    setSourcePort(port: PortModel): void;
    getSourcePort(): PortModel;
    getTargetPort(): PortModel;
    setTargetPort(port: PortModel): void;
    getLabel(): string;
    setLabel(label: string): void;
    getPoints(): PointModel[];
    setPoints(points: PointModel[]): void;
    removePoint(pointModel: PointModel): void;
    removePointsBefore(pointModel: PointModel): void;
    removePointsAfter(pointModel: PointModel): void;
    addPoint(pointModel: PointModel, index?: number): void;
}
