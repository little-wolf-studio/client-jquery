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
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export interface V2beta1ExternalMetricStatus {
    /**
     * currentAverageValue is the current value of metric averaged over autoscaled pods.
     */
    currentAverageValue?: string;

    /**
     * currentValue is the current value of the metric (as a quantity)
     */
    currentValue: string;

    /**
     * metricName is the name of a metric used for autoscaling in metric system.
     */
    metricName: string;

    metricSelector?: models.V1LabelSelector;

}
