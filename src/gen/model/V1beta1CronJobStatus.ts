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
 * CronJobStatus represents the current state of a cron job.
 */
export interface V1beta1CronJobStatus {
    /**
     * A list of pointers to currently running jobs.
     */
    active?: Array<models.V1ObjectReference>;

    /**
     * Information when was the last time the job was successfully scheduled.
     */
    lastScheduleTime?: Date;

}
