import { GenerateStep } from './Step/Generate';
import { ExtractStep } from './Step/Extract';
import { DownloadStep } from './Step/Download';
import { OverrideStep } from './Step/Override';

export class CodeGen {
    download () {
        return new DownloadStep().execute();
    }

    extract () {
        return new ExtractStep().execute();
    }

    override () {
        return new OverrideStep().execute();
    }

    generate () {
        return new GenerateStep().execute();
    }
}

(async () => {
    const codeGen = new CodeGen();

    const allSteps : Record<string, () => Promise<unknown>> = { 
        'download': codeGen.download,
        'extract': codeGen.extract,
        'generate': codeGen.generate,
        'override': codeGen.override,
    }

    const steps = process.argv.length <= 2 ? Object.keys( allSteps ) : process.argv.slice( 2 );

    for ( let step of steps ) {
        console.log( '> ' + step );

        await allSteps[ step ]();

        console.log();
    }
})();