import { BaseEntity, BaseListener } from "../BaseEntity";
import { BaseEvent } from "../BaseEntity";
export interface BaseModelListener extends BaseListener {
    selectionChanged?(event: BaseEvent<BaseModel> & {
        isSelected: boolean;
    }): void;
    entityRemoved?(event: BaseEvent<BaseModel>): void;
}
/**
 * @author Dylan Vorster
 */
export declare class BaseModel<T extends BaseModelListener = BaseModelListener> extends BaseEntity<BaseModelListener> {
    type: string;
    selected: boolean;
    constructor(type?: string, id?: string);
    getSelectedEntities(): BaseModel<T>[];
    deSerialize(ob: any): void;
    serialize(): {
        id: string;
    } & {
        type: string;
        selected: boolean;
    };
    getType(): string;
    getID(): string;
    isSelected(): boolean;
    setSelected(selected?: boolean): void;
    remove(): void;
}
