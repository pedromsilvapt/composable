# composable

> Easily compose complex and reusable ffmpeg filters using JavaScript functions and generate the command string on the fly

# Installation
```shell
npm install --save composable
```

# Usage
Just require the filters from this module and use them.
> **Note** This project comes with typescript definition files right out of the box. Type away!
```javascript
import { trim, concat, source, } from "composable";
import { compile, command } from "composable";

// These will be the times we want to trim
const times = [ [ 0, 10 ], [ 20, 30 ], [ 40, 50 ] ];

const video = [];
const audio = [];

let file = source( "C:\\\\source\\\\file\\\\path.mkv" );

for ( let time of times ) {
    const [ v, a ] = trim( file.select( 'v' ), file.select( 'a' ), time[ 0 ], time[ 1 ] );

    video.push( v );
    audio.push( a );
}


// Note that each stream in this case needs to be a stream factory: a method that returns a stream
const [ sepV, sepA ] = [ () => color( 'black', 854, 480, 3 ), () => silence( 3 ) ];

// Adds a 3-second black scene between eahc original scene
const [ outV, outA ] = concat( separator( video, sepV ), separator( audio, sepA ) );

console.log( command( [ outV, outA ], 'C:\\\\generated\\\\file\\\\path.mkv', { outputArgs: [ '-f', 'matroska', '-y' ] } ).generate() );
// Or run the command right away
command( [ outV, outA ], 'C:\\\\generated\\\\file\\\\path.mkv', { outputArgs: [ '-f', 'matroska', '-y' ] } ).execute();
```

Will result in the following output:
```
-filter_complex "[0:v]trim=start=0:end=10[stream0];
[stream0]setpts=PTS-STARTPTS[stream1];
[0:a]atrim=start=0:end=10[stream2];
[stream2]asetpts=PTS-STARTPTS[stream3];
[0:v]trim=start=20:end=30[stream4];
[stream4]setpts=PTS-STARTPTS[stream5];
[0:a]atrim=start=20:end=30[stream6];
[stream6]asetpts=PTS-STARTPTS[stream7];
[0:v]trim=start=40:end=50[stream8];
[stream8]setpts=PTS-STARTPTS[stream9];
[0:a]atrim=start=40:end=50[stream10];
[stream10]asetpts=PTS-STARTPTS[stream11];
[stream1][stream3][stream5][stream7][stream9][stream11]concat=n=6:v=1:a=1[stream12][stream13]"
```

Try writing that by hand!

## Streams
The core concept of composable are streams. You give them as arguments, and you get them as outputs. This simulates the actual way ffmpeg filters work! Because most streams need a unique name that allows them to be used and connected with other filters, managing these names can be cumbersome and error-prone. Because of this, most of composable's streams are dynamic objects, references if you will, that only get assigned a unique name during compilation.

## Filters
Every filter offers a functional API to keep things simple and clean. On the inside, however, every filter is a class that contains all the information it needs. Because most functions in the public API return the streams outputed by the filter, and not the filter itself, there is a handy attribute on every stream called `source` that gives access to the filter that originated that stream.

## API
### trim
> trim ( video : Stream, audio : Stream, start : number, end : number ) : [ Stream, Stream ];

Trims the video and audio at the same time, beginning at `start` and ending at `end`;

### source
> source ( file : string ) : SourceStream;

Returns a stream that comes from a file source.

### concat
> concat ( videos : Stream[], audios : Stream[] ) : [ Stream, Stream ];

Receives a list of videos and a list of audios, and concatenates them in order.

### color
> color ( color : string, width : number, height : number, duration ?: number ) : OutputStream;

Returns a video stream with the specified resolution, with nothing more than the background color for the specified duration.

### silence
> silence ( duration ?: number ) : OutputStream;

Returns a silent audio stream with an optional duration.

## command
> command( streams : Stream[], output ?: string, options ?: Partial<CommandOptions> ) : CommandFragment

Generates a command fragment that can be used to output the command as a string, using the `generate()` method, or can
run the command right away in a child_process using `execute()`. Executing returns a NodeJs.ReadableStream containing the `stdout` of the process.
