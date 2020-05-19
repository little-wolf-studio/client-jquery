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
 * SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export interface V1beta1SubjectAccessReviewSpec {
    /**
     * Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
     */
    extra?: { [key: string]: Array<string>; };

    /**
     * Groups is the groups you\'re testing for.
     */
    group?: Array<string>;

    nonResourceAttributes?: models.V1beta1NonResourceAttributes;

    resourceAttributes?: models.V1beta1ResourceAttributes;

    /**
     * UID information about the requesting user.
     */
    uid?: string;

    /**
     * User is the user you\'re testing for. If you specify \"User\" but not \"Group\", then is it interpreted as \"What if User were not a member of any groups
     */
    user?: string;

}
