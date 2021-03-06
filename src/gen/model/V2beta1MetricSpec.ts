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
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 */
export interface V2beta1MetricSpec {
    external?: models.V2beta1ExternalMetricSource;

    object?: models.V2beta1ObjectMetricSource;

    pods?: models.V2beta1PodsMetricSource;

    resource?: models.V2beta1ResourceMetricSource;

    /**
     * type is the type of metric source.  It should be one of \"Object\", \"Pods\" or \"Resource\", each mapping to a matching field in the object.
     */
    type: string;

}
