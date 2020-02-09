import { NativeFilter, FilterNamedArguments } from './Filter';
import { Stream } from '../../Stream';

export class GenericFilter extends NativeFilter {
    constructor ( inputs : Stream[] | NativeFilter, name : string, parameters : FilterNamedArguments, outputs : number = 1 ) {
        super( parameters );
        
        this.name = name;

        this.outputsCount = outputs;

        this.from( inputs as any );
    }
}

export function filter ( inputs : Stream[] | NativeFilter, name : string, parameters : FilterNamedArguments ) : Stream;
export function filter ( inputs : Stream[] | NativeFilter, name : string, parameters : FilterNamedArguments, outputs : number ) : Stream[];
export function filter ( inputs : Stream[] | NativeFilter, name : string, parameters : FilterNamedArguments, outputs ?: number ) : Stream | Stream[] {
    const filterInstance = new GenericFilter( inputs, name, parameters, outputs );

    if ( outputs == void 0 ) {
        return filterInstance.outputs[ 0 ];
    }

    return filterInstance.outputs;
}