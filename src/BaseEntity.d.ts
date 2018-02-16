/**
 * @author Dylan Vorster
 */
export interface BaseEvent<T extends BaseEntity = any> {
    entity: BaseEntity<BaseListener>;
    stopPropagation: () => any;
    firing: boolean;
    id: string;
}
export interface BaseListener<T extends BaseEntity = any> {
    lockChanged?(event: BaseEvent<T> & {
        locked: boolean;
    }): void;
}
export declare type BaseEntityType = "node" | "link" | "port" | "point";
export declare class BaseEntity<T extends BaseListener = {}> {
    listeners: {
        [s: string]: T;
    };
    id: string;
    locked: boolean;
    constructor(id?: string);
    getID(): string;
    doClone(lookupTable: {}, clone: any): void;
    clone(lookupTable?: {}): any;
    clearListeners(): void;
    deSerialize(data: any): void;
    serialize(): {
        id: string;
    };
    iterateListeners(cb: (t: T, event: BaseEvent) => any): void;
    removeListener(listener: string): boolean;
    addListener(listener: T): string;
    isLocked(): boolean;
    setLocked(locked?: boolean): void;
}
