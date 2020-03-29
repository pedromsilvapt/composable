import { CodeGenStep } from './CodeGenStep';
import axios from 'axios';
import fs from 'mz/fs';

export class DownloadStep extends CodeGenStep {
    async execute () {
        const response = await axios.get( 'https://ffmpeg.org/ffmpeg-filters.html' );

        if ( response.status < 200 || response.status >= 300 ) {
            throw new Error( '' + response.status + ' ' + response.statusText );
        }

        await fs.writeFile( this.getPath( 'doc.html' ), response.data, { encoding: 'utf8' } );
    }
}