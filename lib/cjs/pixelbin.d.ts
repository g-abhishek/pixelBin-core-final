/**
 * class to create a Pixelbin object
 */
declare class Pixelbin {
    /**
     * provides access to url utilities
     * returns Object
     */
    static get utils(): {
        objToUrl: (obj: any) => string;
        urlToObj: (url: any) => {
            baseUrl: string;
            filePath: any;
            pattern: any;
            version: string;
            zone: any;
            cloudName: any;
        };
    };
    /**
     *
     * @param {File} file
     * @param {Object} signedDetails generated with @pixelbin/core sdk
     * @returns Promise
     */
    static upload(file: File, signedDetails: any): Promise<void>;
    static transformations: {
        Basic: typeof Basic;
        RemoveBG: typeof RemoveBG;
        EraseBG: typeof EraseBG;
        SuperResolution: typeof SuperResolution;
        ArtifactRemoval: typeof ArtifactRemoval;
        WatermarkRemoval: typeof WatermarkRemoval;
        AWSRekognition: typeof AWSRekognition;
        GoogleVision: typeof GoogleVision;
    };
    static Transformation: typeof Transformation;
    /**
     * @param {Object} cloud-details takes detail for cloud name and zone
     */
    constructor({ cloudName, zone }: any);
    cloudName: any;
    zone: any;
    /**
     * provides image on which transformation can be done.
     * @param {String} imageUri path of image.
     * returns Image
     */
    image(imageUri: string): Image;
}
import Transformation from "./transformation";
import Image from "./image.js";
import * as Basic from "./transformations/Basic";
import * as RemoveBG from "./transformations/RemoveBG";
import * as EraseBG from "./transformations/EraseBG";
import * as SuperResolution from "./transformations/SuperResolution";
import * as ArtifactRemoval from "./transformations/ArtifactRemoval";
import * as WatermarkRemoval from "./transformations/WatermarkRemoval";
import * as AWSRekognition from "./transformations/AWSRekognition";
import * as GoogleVision from "./transformations/GoogleVision";
export { Pixelbin as default, Transformation };
