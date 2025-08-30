import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 16.30 azmq
  * Receive commands sent through a libzmq client, and forward them to filters in the filtergraph.
  * 
  * zmq and azmq work as a pass-through filters. zmq must be inserted between two video filters, azmq between two audio filters. Both are capable to send messages to any filter type.
  * 
  * To enable these filters you need to install the libzmq library and headers and configure FFmpeg with --enable-libzmq.
  * 
  * For more information about libzmq see:
  * http://www.zeromq.org/
  * 
  * The zmq and azmq filters work as a libzmq server, which receives messages sent through a network interface defined by the
  * bind_address (or the abbreviation "b") option. Default value of this option is tcp://localhost:5555. You may want to alter this value to your needs, but do not forget to escape any ’:’ signs (see filtergraph escaping).
  * 
  * The received message must be in the form:
  * 
  * 
  * TARGET COMMAND [ARG]
  * 
  * TARGET specifies the target of the command, usually the name of the filter class or a specific filter instance name. The default filter instance name uses the pattern ‘Parsed_<filter_name>_<index>’, but you can override this by using the ‘filter_name@id’ syntax (see Filtergraph syntax).
  * 
  * COMMAND specifies the name of the command for the target filter.
  * 
  * ARG is optional and specifies the optional argument list for the given COMMAND.
  * 
  * Upon reception, the message is processed and the corresponding command is injected into the filtergraph. Depending on the result, the filter will send a reply to the client, adopting the format:
  * 
  * 
  * ERROR_CODE ERROR_REASON
  * MESSAGE
  * 
  * MESSAGE is optional.
  */
export class Azmq extends Filter<AzmqParameters> {
    outputs : FilterStreamRef<AzmqParameters, Azmq>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : AzmqParameters = {} as any ) {
        super( inputs, 'azmq', parameters );
    }
}

export interface AzmqParameters {


    [key : string] : string | number;
}

/**
  * 16.30 azmq
  * Receive commands sent through a libzmq client, and forward them to filters in the filtergraph.
  * 
  * zmq and azmq work as a pass-through filters. zmq must be inserted between two video filters, azmq between two audio filters. Both are capable to send messages to any filter type.
  * 
  * To enable these filters you need to install the libzmq library and headers and configure FFmpeg with --enable-libzmq.
  * 
  * For more information about libzmq see:
  * http://www.zeromq.org/
  * 
  * The zmq and azmq filters work as a libzmq server, which receives messages sent through a network interface defined by the
  * bind_address (or the abbreviation "b") option. Default value of this option is tcp://localhost:5555. You may want to alter this value to your needs, but do not forget to escape any ’:’ signs (see filtergraph escaping).
  * 
  * The received message must be in the form:
  * 
  * 
  * TARGET COMMAND [ARG]
  * 
  * TARGET specifies the target of the command, usually the name of the filter class or a specific filter instance name. The default filter instance name uses the pattern ‘Parsed_<filter_name>_<index>’, but you can override this by using the ‘filter_name@id’ syntax (see Filtergraph syntax).
  * 
  * COMMAND specifies the name of the command for the target filter.
  * 
  * ARG is optional and specifies the optional argument list for the given COMMAND.
  * 
  * Upon reception, the message is processed and the corresponding command is injected into the filtergraph. Depending on the result, the filter will send a reply to the client, adopting the format:
  * 
  * 
  * ERROR_CODE ERROR_REASON
  * MESSAGE
  * 
  * MESSAGE is optional.
  */
export function azmq ( inputs : Stream | Stream[] = [], parameters : AzmqParameters = {} as any ) {
    return new Azmq( inputs, parameters );
}