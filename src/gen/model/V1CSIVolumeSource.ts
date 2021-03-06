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
 * Represents a source location of a volume to mount, managed by an external CSI driver
 */
export interface V1CSIVolumeSource {
    /**
     * Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
     */
    driver: string;

    /**
     * Filesystem type to mount. Ex. \"ext4\", \"xfs\", \"ntfs\". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
     */
    fsType?: string;

    nodePublishSecretRef?: models.V1LocalObjectReference;

    /**
     * Specifies a read-only configuration for the volume. Defaults to false (read/write).
     */
    readOnly?: boolean;

    /**
     * VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver\'s documentation for supported values.
     */
    volumeAttributes?: { [key: string]: string; };

}
