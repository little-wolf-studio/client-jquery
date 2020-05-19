/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.18.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used.
 */
export interface V1beta1AllowedFlexVolume {
    /**
     * driver is the name of the Flexvolume driver.
     */
    driver: string;

}