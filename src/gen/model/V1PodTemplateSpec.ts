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
 * PodTemplateSpec describes the data a pod should have when created from a template
 */
export interface V1PodTemplateSpec {
    metadata?: models.V1ObjectMeta;

    spec?: models.V1PodSpec;

}