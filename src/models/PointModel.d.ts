import { BaseModel, BaseModelListener } from "./BaseModel";
import { LinkModel } from "./LinkModel";
export declare class PointModel extends BaseModel<BaseModelListener> {
    x: number;
    y: number;
    link: LinkModel;
    constructor(link: LinkModel, points: {
        x: number;
        y: number;
    });
    getSelectedEntities(): this[];
    isConnectedToPort(): boolean;
    deSerialize(ob: any): void;
    serialize(): {
        id: string;
    } & {
        type: string;
        selected: boolean;
    } & {
        x: number;
        y: number;
    };
    remove(): void;
    updateLocation(points: {
        x: number;
        y: number;
    }): void;
    getX(): number;
    getY(): number;
    getLink(): LinkModel;
    isLocked(): boolean;
}
