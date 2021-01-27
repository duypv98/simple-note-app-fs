/** Declaration file generated by dts-gen */

export = simple_json_db;

declare class simple_json_db {
    constructor(filePath: any, options?: any);

    JSON(storage?: any): any;

    delete(key: string): any;

    deleteAll(): any;

    get(key: string): any;

    has(key: string): boolean;

    set(key: string, value: any): void;

    sync(): void;

}
