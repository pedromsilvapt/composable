import { Filter, FilterStreamRef } from '../../../Filter';
import { Stream } from '../../../Compiler';

/**
  * 11.112 libvmaf
  * Obtain the VMAF (Video Multi-Method Assessment Fusion) score between two input videos.
  * 
  * The obtained VMAF score is printed through the logging system.
  * 
  * It requires Netflix’s vmaf library (libvmaf) as a pre-requisite. After installing the library it can be enabled using:
  * ./configure --enable-libvmaf --enable-version3. If no model path is specified it uses the default model: vmaf_v0.6.1.pkl.
  * 
  * The filter has following options:
  */
export class VideoLibVMAF extends Filter<VideoLibVMAFParameters> {
    outputs : FilterStreamRef<VideoLibVMAFParameters, VideoLibVMAF>[];

    public constructor ( inputs : Stream | Stream[] = [], parameters : VideoLibVMAFParameters = {} as any ) {
        super( inputs, 'libvmaf', parameters );
    }
}

export interface VideoLibVMAFParameters {
    /** Set the model path which is to be used for SVM. Default value: "/usr/local/share/model/vmaf_v0.6.1.pkl" */
    model_path ?: string | number;
    /** Set the file path to be used to store logs. */
    log_path ?: string | number;
    /** Set the format of the log file (xml or json). */
    log_fmt ?: string | number;
    /** This option can enable/disable the score_transform applied to the final predicted VMAF score, if you have specified score_transform option in the input parameter file passed to run_vmaf_training.py Default value: false */
    enable_transform ?: string | number;
    /** Invokes the phone model which will generate VMAF scores higher than in the regular model, which is more suitable for laptop, TV, etc. viewing conditions. Default value: false */
    phone_model ?: string | number;
    /** Enables computing psnr along with vmaf. Default value: false */
    psnr ?: string | number;
    /** Enables computing ssim along with vmaf. Default value: false */
    ssim ?: string | number;
    /** Enables computing ms_ssim along with vmaf. Default value: false */
    ms_ssim ?: string | number;
    /** Set the pool method to be used for computing vmaf. Options are min, harmonic_mean or mean (default). */
    pool ?: string | number;
    /** Set number of threads to be used when computing vmaf. Default value: 0, which makes use of all available logical processors. */
    n_threads ?: string | number;
    /** Set interval for frame subsampling used when computing vmaf. Default value: 1 */
    n_subsample ?: string | number;
    /** Enables confidence interval. Default value: false */
    enable_conf_interval ?: string | number;

    [key : string] : string | number;
}

/**
  * 11.112 libvmaf
  * Obtain the VMAF (Video Multi-Method Assessment Fusion) score between two input videos.
  * 
  * The obtained VMAF score is printed through the logging system.
  * 
  * It requires Netflix’s vmaf library (libvmaf) as a pre-requisite. After installing the library it can be enabled using:
  * ./configure --enable-libvmaf --enable-version3. If no model path is specified it uses the default model: vmaf_v0.6.1.pkl.
  * 
  * The filter has following options:
  */
export function videoLibVMAF ( inputs : Stream | Stream[] = [], parameters : VideoLibVMAFParameters = {} as any ) {
    return new VideoLibVMAF( inputs, parameters );
}