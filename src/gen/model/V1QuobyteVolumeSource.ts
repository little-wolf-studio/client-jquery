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
 * Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
 */
export interface V1QuobyteVolumeSource {
    /**
     * Group to map volume access to Default is no group
     */
    group?: string;

    /**
     * ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
     */
    readOnly?: boolean;

    /**
     * Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
     */
    registry: string;

    /**
     * Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
     */
    tenant?: string;

    /**
     * User to map volume access to Defaults to serivceaccount user
     */
    user?: string;

    /**
     * Volume is a string that references an already created Quobyte volume by name.
     */
    volume: string;

}
