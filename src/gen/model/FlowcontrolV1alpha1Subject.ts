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
 * Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
 */
export interface FlowcontrolV1alpha1Subject {
    group?: models.V1alpha1GroupSubject;

    /**
     * Required
     */
    kind: string;

    serviceAccount?: models.V1alpha1ServiceAccountSubject;

    user?: models.V1alpha1UserSubject;

}
