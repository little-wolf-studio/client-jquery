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
 * specification of a horizontal pod autoscaler.
 */
export interface V1HorizontalPodAutoscalerSpec {
    /**
     * upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
     */
    maxReplicas: number;

    /**
     * minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available.
     */
    minReplicas?: number;

    scaleTargetRef: models.V1CrossVersionObjectReference;

    /**
     * target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified the default autoscaling policy will be used.
     */
    targetCPUUtilizationPercentage?: number;

}
