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
 * Handler defines a specific action that should be taken
 */
export interface V1Handler {
    exec?: models.V1ExecAction;

    httpGet?: models.V1HTTPGetAction;

    tcpSocket?: models.V1TCPSocketAction;

}
