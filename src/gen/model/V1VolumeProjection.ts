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
 * Projection that may be projected along with other supported volume types
 */
export interface V1VolumeProjection {
    configMap?: models.V1ConfigMapProjection;

    downwardAPI?: models.V1DownwardAPIProjection;

    secret?: models.V1SecretProjection;

    serviceAccountToken?: models.V1ServiceAccountTokenProjection;

}
