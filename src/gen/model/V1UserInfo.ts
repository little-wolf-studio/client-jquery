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
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 */
export interface V1UserInfo {
    /**
     * Any additional information provided by the authenticator.
     */
    extra?: { [key: string]: Array<string>; };

    /**
     * The names of groups this user is a part of.
     */
    groups?: Array<string>;

    /**
     * A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
     */
    uid?: string;

    /**
     * The name that uniquely identifies this user among all active users.
     */
    username?: string;

}
