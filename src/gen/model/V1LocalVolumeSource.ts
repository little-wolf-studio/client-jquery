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
 * Local represents directly-attached storage with node affinity (Beta feature)
 */
export interface V1LocalVolumeSource {
    /**
     * Filesystem type to mount. It applies only when the Path is a block device. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". The default value is to auto-select a fileystem if unspecified.
     */
    fsType?: string;

    /**
     * The full path to the volume on the node. It can be either a directory or block device (disk, partition, ...).
     */
    path: string;

}