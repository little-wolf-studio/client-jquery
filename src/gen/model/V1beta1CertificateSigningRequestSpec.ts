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
 * This information is immutable after the request is created. Only the Request and Usages fields can be set on creation, other fields are derived by Kubernetes and cannot be modified by users.
 */
export interface V1beta1CertificateSigningRequestSpec {
    /**
     * Extra information about the requesting user. See user.Info interface for details.
     */
    extra?: { [key: string]: Array<string>; };

    /**
     * Group information about the requesting user. See user.Info interface for details.
     */
    groups?: Array<string>;

    /**
     * Base64-encoded PKCS#10 CSR data
     */
    request: string;

    /**
     * Requested signer for the request. It is a qualified name in the form: `scope-hostname.io/name`. If empty, it will be defaulted:  1. If it\'s a kubelet client certificate, it is assigned     \"kubernetes.io/kube-apiserver-client-kubelet\".  2. If it\'s a kubelet serving certificate, it is assigned     \"kubernetes.io/kubelet-serving\".  3. Otherwise, it is assigned \"kubernetes.io/legacy-unknown\". Distribution of trust for signers happens out of band. You can select on this field using `spec.signerName`.
     */
    signerName?: string;

    /**
     * UID information about the requesting user. See user.Info interface for details.
     */
    uid?: string;

    /**
     * allowedUsages specifies a set of usage contexts the key will be valid for. See: https://tools.ietf.org/html/rfc5280#section-4.2.1.3      https://tools.ietf.org/html/rfc5280#section-4.2.1.12
     */
    usages?: Array<string>;

    /**
     * Information about the requesting user. See user.Info interface for details.
     */
    username?: string;

}
