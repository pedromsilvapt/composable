# composable

> Easily compose complex and reusable ffmpeg filters using JavaScript functions and generate the command string on the fly

# Installation
```shell
npm install --save composable
```

# Usage
Just require the filters from this module and use them.
> **Note** This project comes with typescript definition files right out of the box. Type away!
```typescript
import { Compiler, Input, Output, Stream } from "composable";
import { VideoColor } from "composable/filters";
import { TrimComposite, SilenceComposite, ConcatComposite, separator } from "composable/composites";
import { ConversionExecutor } from "composable/executors";

// These will be the times we want to trim
const times = [ [ 0, 10 ], [ 20, 30 ], [ 40, 50 ] ];

const video : Stream[] = [];
const audio : Stream[] = [];

let file = new Input( "C:\\source\\file\\path.mkv" );

for ( let time of times ) {
    const [ v, a ] = new TrimComposite( file.select( 'v' ), file.select( 'a' ), time[ 0 ], time[ 1 ] );

    video.push( v );
    audio.push( a );
}

// Note that each stream in this case needs to be a stream factory: a method that returns a stream
const [ sepV, sepA ] = [ () => new VideoColor( null, { color: 'black', size: `1920x1080`, duration: 3 } ), () => new SilenceComposite( 3 ) ];

// Adds a 3-second black scene between each original scene
const [ outV, outA ] = new ConcatComposite( [ separator( video, sepV ) ], [ separator( audio, sepA ) ] );

const output = new Output( 'C:\\generated\\file\\path.mkv', [ '-f', 'matroska', '-v', '-map', outV, '-map', outA ] );

console.log( new Compiler( output ).command.toString() );
// Or run the command right away
const process = new ConversionExecutor( new Compiler( output ) ).execute();

process.onProgress.subscribe( p => console.log( p.duration, p.percentage, p.frame, p.speed, p.time ) );
process.onError.subscribe( e => console.error( e ) );
process.onEnd.subscribe( () => console.log( 'ended' ) );
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
The core concept of composable are streams. You give them as arguments, and you get them as outputs. This simulates the actual way ffmpeg filters work! Because most streams need a unique name that allows them to be used and connected with other filters, managing these names manually can be cumbersome and error-prone. Because of this, most of composable's streams are dynamic objects, references if you will, that only get assigned a unique name during compilation.

Most places that accept a string expect one of three things: a `string` (treated as a static stream name), a `Filter` (refers to the first output stream of that filter), or an actual `StreamRef` instance.

## Fragments
A command is composed of fragments: these can range from an `Input`, a `Stream`, a `Filter`, a `Composite`, to an `Output`. When a fragment depends on another (like an output that depends on a filter, or a filter depends a stream), it is responsible for compiling any and all of it's dependencies. This means that there is no need to manually compile every fragment of the command, just it's tails (usually it's outputs).

## Filters
The submodule `composable/filters` contains a list of classes and functions for a huge variety of filters generated automatically based on the online documentation of ffmpeg. However, it is possible to use any filter we want, event if it is not on that list, by using the `Filter` class (or `filter` function) and passing them their inputs, filter name, parameters (if any), and how many output streams the filter creates (if different than 1).

# Composites
Composites are similar to filters - indeed, they can be used anywhere a normal filter can inside our library. The difference lies in that instead of compiling into an actual discrite filter, they can be seen as blueprints for one or more filters.

That is, they are like virtual filters that can generate dinamically the filtergraph for them depending on their input. They can be created by extending the `Composite` class and implementing the `compose()` and `clone()` methods, or by simply calling the `composite()` function and passing it a `compose` lambda as an argument.

There are already some useful composites under the submodule `composable/composites`, but you are free to create your very own!

# Compiler
Finally, all pieces fit together with the compiler, that's responsible for creating the actual command from all of it's fragments. A compiler can be created with it's fragments `const compiler = new Compiler( output1, output2 )`, or these can be added after the compiler is created through the method `compiler.compile( output1, output2 )`.

When all the fragments are compiled, the resulting command can be obtained as an array of arguments from the expression `compiler.command.toArray()` or as a string from the expression `compiler.command.toString()`.

# Executors
Executors (available through `composable/executors`) are handy tools that simplify the process of actually calling ffmpeg with the generated command. Instead of having to mess around with the `child_process` module, executors do it all in the background. There can be different executors, from the `ConversionExecutor` (that handles converting one or more inputs into one or more outputs) to the `BlackSceneDetector` that automatically parses the output from the `blackdetect` filter.
 > **Warning:** This part of the library is still experimental and only works in node. Calling it in a browser will result in an error.
