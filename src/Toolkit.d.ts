/**
 * @author Dylan Vorster
 */
export declare class Toolkit {
    static TESTING_MODE: boolean;
    static TESTING_MODE_ID: number;
    /**
     * Generats a unique ID (thanks Stack overflow :3)
     * @returns {String}
     */
    static UID(): string;
    /**
     * Finds the closest element as a polyfill
     *
     * @param  {Element} element  [description]
     * @param  {string}  selector [description]
     */
    static closest(element: Element, selector: string): any;
}
