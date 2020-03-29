/**
 * @hiden
 */
declare module 'jiff' {
    export interface DiffOptions {
        hash ?: ( x : any ) => string | number;
        makeContext ?: ( index : number, array : any[] ) => any;
        invertible ?: boolean;
    }

    export interface PatchOptions {
        findContext ?: ( index : number, array : any[], context : any ) => number;
    }

    export type Patch = any;

    export function diff ( original : any, changed : any, options ?: DiffOptions ) : Patch[];
    export function patch<T, U = T> ( changes : Patch[], object : T, options ?: PatchOptions ) : U;
    export function patchInPlace<T, U = T> ( changes : Patch[], object : T, options ?: PatchOptions ) : U;
    export function inverse ( changes : Patch[] ) : Patch[];
    export function clone<T> ( object : T ) : T;
}