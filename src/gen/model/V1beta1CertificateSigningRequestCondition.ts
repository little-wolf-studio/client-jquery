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

export interface V1beta1CertificateSigningRequestCondition {
    /**
     * timestamp for the last update to this condition
     */
    lastUpdateTime?: Date;

    /**
     * human readable message with details about the request state
     */
    message?: string;

    /**
     * brief reason for the request state
     */
    reason?: string;

    /**
     * request approval state, currently Approved or Denied.
     */
    type: string;

}
