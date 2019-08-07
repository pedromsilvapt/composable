import { DataUnit, DataAmount, Duration, DurationUnit } from 'data-unit';

export const FFmpegProgressPattern = /frame=\s*(?<nframe>[0-9]+)\s+fps=\s*(?<nfps>[0-9\.]+)\s+q=(?<nq>[0-9\.-]+)\s+(L?).*(size=\s*(?<nsize>[0-9]+)(?<ssize>kB|mB|b)?\s*)?time=\s*(?<sduration>[0-9\:\.]+).*(bitrate=\s*(?<nbitrate>[0-9\.]+)(?<sbitrate>bits\/s|mbits\/s|kbits\/s)?.*)?(dup=(?<ndup>\d+)\s*)?(drop=(?<ndrop>\d+)\s*)?speed=\s*(?<nspeed>[0-9\.]+)x/;

export const FFmpegDurationPattern = /(\d+):(\d+):(\d+)\.(\d+)/;

export class FFmpegProgress {
    static parse ( line : string ) : FFmpegProgress {
        const progress = new FFmpegProgress();

        if ( !progress.update( line ) ) {
            return null;
        }

        return progress;
    }

    percentage : number = 0;

    // seconds
    duration : Duration;

    // seconds
    time : Duration = new Duration( 0, DurationUnit.SECONDS );

    fps : number;

    // kB
    size : DataAmount;

    // kbits/s
    bitrate : DataAmount;

    frame : number;

    speed : number;

    quantitizer : number;

    dup : number;

    drop : number;

    constructor ( duration : number | string | Duration = Infinity ) {
        this.duration = Duration.parse( duration );
    }

    update ( line : string ) : boolean {
        const match = line.match( FFmpegProgressPattern );

        if ( !match ) {
            return false;
        }

        this.time = this.parseDuration( match.groups.sduration );
        this.fps = +match.groups.nfps;
        this.size = match.groups.nsize ? this.parseSize( +match.groups.nsize, match.groups.ssize ) : null;
        this.bitrate = match.groups.nbitrate ? this.parseBitrate( +match.groups.nbitrate, match.groups.sbitrate ) : null;
        this.frame = +match.groups.nframe;
        this.speed = +match.groups.nspeed;
        this.quantitizer = +match.groups.nq;
        this.dup = +match.groups.ndup;
        this.drop = +match.groups.ndrop;

        this.percentage = this.duration ? Math.max( 0, Math.min( 100, this.time.as( DurationUnit.SECONDS ) * 100 / this.duration.as( DurationUnit.SECONDS ) ) ) : 0;

        return true;
    }

    protected parseSize ( size : number, unit : string ) : DataAmount {
        const data = DataAmount.parse( `${ size }${ unit }` );

        return data.convert( DataUnit.KILOBYTES );
    }

    protected parseBitrate ( size : number, unitStr : string ) : DataAmount {
        let unit : DataUnit;

        switch ( unitStr ) {
            case 'bits/s':
                unit = DataUnit.BITS;
                break;
            case 'mbits/s':
                unit = DataUnit.MEGABITS;
                break;
            case 'kbits/s':
                unit = DataUnit.KILOBITS;
                break;
        }

        const data = new DataAmount( size, unit );

        return data.convert( DataUnit.KILOBITS );
    }

    protected parseDuration ( duration : string ) : Duration {
        const matcher = duration.match( FFmpegDurationPattern );

        if ( !matcher ) {
            throw new Error( "Invalid time format: " + duration );
        }

        const hours = +matcher[ 1 ] * 60 * 60;
        const mins = +matcher[ 2 ] * 60;
        const seconds = +matcher[ 3 ];
        let ms = +matcher[ 4 ];
        
        if ( ms < 10 ) {
            ms = ms / 10;
        } else if ( ms < 100 ) {
            ms = ms / 100;
        } else if ( ms < 1000 ) {
            ms = ms / 1000;
        }

        return new Duration( hours + mins + seconds + ms, DurationUnit.SECONDS );
    }
}