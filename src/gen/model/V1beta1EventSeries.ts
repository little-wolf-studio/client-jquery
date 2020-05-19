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
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export interface V1beta1EventSeries {
    /**
     * Number of occurrences in this series up to the last heartbeat time
     */
    count: number;

    /**
     * Time when last Event from the series was seen before last heartbeat.
     */
    lastObservedTime: Date;

    /**
     * Information whether this series is ongoing or finished. Deprecated. Planned removal for 1.18
     */
    state: string;

}