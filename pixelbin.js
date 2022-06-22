import "core-js/stable";
import "regenerator-runtime/runtime";
import Image from "./image.js";
import Transformation from "./transformation";
import * as errors from "./errors/PixelbinErrors";
import { urlToObj, objToUrl } from "./utils";
import { upload } from "./upload";

import * as Basic from "./transformations/Basic";
import * as RemoveBG from "./transformations/RemoveBG";
import * as EraseBG from "./transformations/EraseBG";
import * as SuperResolution from "./transformations/SuperResolution";
import * as ArtifactRemoval from "./transformations/ArtifactRemoval";
import * as WatermarkRemoval from "./transformations/WatermarkRemoval";
import * as AWSRekognition from "./transformations/AWSRekognition";
import * as GoogleVision from "./transformations/GoogleVision";

/**
 * class to create a Pixelbin object
 */
class Pixelbin {
    /**
     * @param {Object} cloud-details takes detail for cloud name and zone
     */
    constructor({ cloudName, zone }) {
        this.cloudName = cloudName;
        this.zone = zone === "default" ? "" : zone || "";
    }

    /**
     * provides image on which transformation can be done.
     * @param {String} imageUri path of image.
     * returns Image
     */
    image(imageUri) {
        return new Image(imageUri, this.cloudName, this.zone);
    }

    /**
     * provides access to url utilities
     * returns Object
     */
    static get utils() {
        return { objToUrl, urlToObj };
    }

    /**
     *
     * @param {File} file
     * @param {Object} signedDetails generated with @pixelbin/core sdk
     * @returns Promise
     */
    static async upload(file, signedDetails) {
        return upload(file, signedDetails);
    }

    static transformations = {
        Basic,
        RemoveBG,
        EraseBG,
        SuperResolution,
        ArtifactRemoval,
        WatermarkRemoval,
        AWSRekognition,
        GoogleVision,
    };

    static Transformation = Transformation;
}

export { Pixelbin as default, Transformation };
