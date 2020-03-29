import ts from 'typescript';

export interface Predicate<T> {
    ( item : T ) : boolean;
}

export class CodeQuery {
    static classExtends ( parentClass : string ) : Predicate<ts.ClassDeclaration> {
        return ( cl ) => cl.heritageClauses.length > 0 && cl.heritageClauses[ 0 ].types[ 0 ].expression.getText() == parentClass;
    }
}