import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.89 graphmonitor
  * Show various filtergraph stats.
  * 
  * With this filter one can debug complete filtergraph. Especially issues with links filling with queued frames.
  * 
  * The filter accepts the following options:
  */
export class VideoGraphMonitor extends Filter<VideoGraphMonitorParameters> {
    outputs : FilterStreamRef<VideoGraphMonitorParameters, VideoGraphMonitor>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoGraphMonitorParameters = {} as any ) {
        super( inputs, 'graphmonitor', parameters );
    }
}

export interface VideoGraphMonitorParameters {
    /**
      * Set video output size. Default is hd720.
      * @aliases s
      */
    size ?: string | number;
    /**
      * Set video output size. Default is hd720.
      * @aliasof size
      */
    s ?: string | number;
    /**
      * Set video opacity. Default is 0.9. Allowed range is from 0 to 1.
      * @aliases o
      */
    opacity ?: string | number;
    /**
      * Set video opacity. Default is 0.9. Allowed range is from 0 to 1.
      * @aliasof opacity
      */
    o ?: string | number;
    /**
      * Set output mode, can be fulll or compact. In compact mode only filters with some queued frames have displayed stats.
      * @aliases m
      */
    mode ?: string | number;
    /**
      * Set output mode, can be fulll or compact. In compact mode only filters with some queued frames have displayed stats.
      * @aliasof mode
      */
    m ?: string | number;
    /**
      * Set flags which enable which stats are shown in video.
      * Available values for flags are:
      * ‘queue’
      * Display number of queued frames in each link.
      * ‘frame_count_in’
      * Display number of frames taken from filter.
      * ‘frame_count_out’
      * Display number of frames given out from filter.
      * ‘pts’
      * Display current filtered frame pts.
      * ‘time’
      * Display current filtered frame time.
      * ‘timebase’
      * Display time base for filter link.
      * ‘format’
      * Display used format for filter link.
      * ‘size’
      * Display video size or number of audio channels in case of audio used by filter link.
      * ‘rate’
      * Display video frame rate or sample rate in case of audio used by filter link.
      * @aliases f
      */
    flags ?: string | number;
    /**
      * Set flags which enable which stats are shown in video.
      * Available values for flags are:
      * ‘queue’
      * Display number of queued frames in each link.
      * ‘frame_count_in’
      * Display number of frames taken from filter.
      * ‘frame_count_out’
      * Display number of frames given out from filter.
      * ‘pts’
      * Display current filtered frame pts.
      * ‘time’
      * Display current filtered frame time.
      * ‘timebase’
      * Display time base for filter link.
      * ‘format’
      * Display used format for filter link.
      * ‘size’
      * Display video size or number of audio channels in case of audio used by filter link.
      * ‘rate’
      * Display video frame rate or sample rate in case of audio used by filter link.
      * @aliasof flags
      */
    f ?: string | number;
    /**
      * Set upper limit for video rate of output stream, Default value is 25. This guarantee that output video frame rate will not be higher than this value.
      * @aliases r
      */
    rate ?: string | number;
    /**
      * Set upper limit for video rate of output stream, Default value is 25. This guarantee that output video frame rate will not be higher than this value.
      * @aliasof rate
      */
    r ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.89 graphmonitor
  * Show various filtergraph stats.
  * 
  * With this filter one can debug complete filtergraph. Especially issues with links filling with queued frames.
  * 
  * The filter accepts the following options:
  */
export function videoGraphMonitor ( inputs : Stream | Stream[] = [], parameters : VideoGraphMonitorParameters = {} as any ) {
    return new VideoGraphMonitor( inputs, parameters );
}