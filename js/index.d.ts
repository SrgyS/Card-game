// index.d.ts
declare module '*.jpg';
declare module '*.jpeg';
// declare module 'jest' {
//     interface ReplaceProperty<T> {
//         <K extends keyof T>(obj: T, key: K, value: T[K]): void;
//     }

//     interface JestImportMeta extends ImportMeta {
//         replaceProperty: ReplaceProperty<T>;
//     }
// }

declare module 'jest' {
    interface ReplaceProperty<T extends object | string> {
        <K extends keyof T>(obj: T, key: K, value: T[K]): void;
    }

    interface JestImportMeta extends ImportMeta {
        replaceProperty: ReplaceProperty<object | string>;
    }
}
