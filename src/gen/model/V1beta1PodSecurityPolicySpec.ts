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
 * PodSecurityPolicySpec defines the policy enforced.
 */
export interface V1beta1PodSecurityPolicySpec {
    /**
     * allowPrivilegeEscalation determines if a pod can request to allow privilege escalation. If unspecified, defaults to true.
     */
    allowPrivilegeEscalation?: boolean;

    /**
     * AllowedCSIDrivers is a whitelist of inline CSI drivers that must be explicitly set to be embedded within a pod spec. An empty value indicates that any CSI driver can be used for inline ephemeral volumes. This is an alpha field, and is only honored if the API server enables the CSIInlineVolume feature gate.
     */
    allowedCSIDrivers?: Array<models.V1beta1AllowedCSIDriver>;

    /**
     * allowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author\'s discretion. You must not list a capability in both allowedCapabilities and requiredDropCapabilities.
     */
    allowedCapabilities?: Array<string>;

    /**
     * allowedFlexVolumes is a whitelist of allowed Flexvolumes.  Empty or nil indicates that all Flexvolumes may be used.  This parameter is effective only when the usage of the Flexvolumes is allowed in the \"volumes\" field.
     */
    allowedFlexVolumes?: Array<models.V1beta1AllowedFlexVolume>;

    /**
     * allowedHostPaths is a white list of allowed host paths. Empty indicates that all host paths may be used.
     */
    allowedHostPaths?: Array<models.V1beta1AllowedHostPath>;

    /**
     * AllowedProcMountTypes is a whitelist of allowed ProcMountTypes. Empty or nil indicates that only the DefaultProcMountType may be used. This requires the ProcMountType feature flag to be enabled.
     */
    allowedProcMountTypes?: Array<string>;

    /**
     * allowedUnsafeSysctls is a list of explicitly allowed unsafe sysctls, defaults to none. Each entry is either a plain sysctl name or ends in \"*\" in which case it is considered as a prefix of allowed sysctls. Single * means all unsafe sysctls are allowed. Kubelet has to whitelist all allowed unsafe sysctls explicitly to avoid rejection.  Examples: e.g. \"foo/_*\" allows \"foo/bar\", \"foo/baz\", etc. e.g. \"foo.*\" allows \"foo.bar\", \"foo.baz\", etc.
     */
    allowedUnsafeSysctls?: Array<string>;

    /**
     * defaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capability in both defaultAddCapabilities and requiredDropCapabilities. Capabilities added here are implicitly allowed, and need not be included in the allowedCapabilities list.
     */
    defaultAddCapabilities?: Array<string>;

    /**
     * defaultAllowPrivilegeEscalation controls the default setting for whether a process can gain more privileges than its parent process.
     */
    defaultAllowPrivilegeEscalation?: boolean;

    /**
     * forbiddenSysctls is a list of explicitly forbidden sysctls, defaults to none. Each entry is either a plain sysctl name or ends in \"*\" in which case it is considered as a prefix of forbidden sysctls. Single * means all sysctls are forbidden.  Examples: e.g. \"foo/_*\" forbids \"foo/bar\", \"foo/baz\", etc. e.g. \"foo.*\" forbids \"foo.bar\", \"foo.baz\", etc.
     */
    forbiddenSysctls?: Array<string>;

    fsGroup: models.V1beta1FSGroupStrategyOptions;

    /**
     * hostIPC determines if the policy allows the use of HostIPC in the pod spec.
     */
    hostIPC?: boolean;

    /**
     * hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.
     */
    hostNetwork?: boolean;

    /**
     * hostPID determines if the policy allows the use of HostPID in the pod spec.
     */
    hostPID?: boolean;

    /**
     * hostPorts determines which host port ranges are allowed to be exposed.
     */
    hostPorts?: Array<models.V1beta1HostPortRange>;

    /**
     * privileged determines if a pod can request to be run as privileged.
     */
    privileged?: boolean;

    /**
     * readOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.
     */
    readOnlyRootFilesystem?: boolean;

    /**
     * requiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added.
     */
    requiredDropCapabilities?: Array<string>;

    runAsGroup?: models.V1beta1RunAsGroupStrategyOptions;

    runAsUser: models.V1beta1RunAsUserStrategyOptions;

    runtimeClass?: models.V1beta1RuntimeClassStrategyOptions;

    seLinux: models.V1beta1SELinuxStrategyOptions;

    supplementalGroups: models.V1beta1SupplementalGroupsStrategyOptions;

    /**
     * volumes is a white list of allowed volume plugins. Empty indicates that no volumes may be used. To allow all volumes you may use \'*\'.
     */
    volumes?: Array<string>;

}
