/* tslint:disable */
/* eslint-disable */
/**
 * Hyperledger Cactus Example - Carbon Accounting App
 * Demonstrates how a business use case can be satisifedwith Cactus when multiple distinct ledgers are involved.
 *
 * The version of the OpenAPI document: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * Stores global constants related to the authorization of the application. Specifically enumerates the claims to validate for as per RFC 7519, section 4.1. See: https://tools.ietf.org/html/rfc7519#section-4.1
 * @export
 * @enum {string}
 */
export enum AuthzJwtClaim {
    iss = 'Hyperledger Labs - Carbon Accounting Tool'
}

/**
 * 
 * @export
 * @enum {string}
 */
export enum AuthzScope {
    GroupAdmin = 'group:admin',
    GroupUser = 'group:user'
}

/**
 * 
 * @export
 * @interface Checkpoint
 */
export interface Checkpoint {
    /**
     * 
     * @type {number}
     * @memberof Checkpoint
     */
    fromBlock: number;
    /**
     * 
     * @type {string}
     * @memberof Checkpoint
     */
    votes: string;
}
/**
 * 
 * @export
 * @interface DaoTokenGetAllowanceNotFoundResponse
 */
export interface DaoTokenGetAllowanceNotFoundResponse {
    /**
     * Indicates whether the account was found or not.
     * @type {boolean}
     * @memberof DaoTokenGetAllowanceNotFoundResponse
     */
    accountFound: boolean;
    /**
     * Indicates whether the spender was found or not.
     * @type {boolean}
     * @memberof DaoTokenGetAllowanceNotFoundResponse
     */
    spenderFound: boolean;
}
/**
 * 
 * @export
 * @interface DaoTokenGetAllowanceRequest
 */
export interface DaoTokenGetAllowanceRequest {
    /**
     * The address of the account holding the funds
     * @type {string}
     * @memberof DaoTokenGetAllowanceRequest
     */
    account: string;
    /**
     * The address of the account spending the funds
     * @type {string}
     * @memberof DaoTokenGetAllowanceRequest
     */
    spender: string;
}
/**
 * 
 * @export
 * @interface DaoTokenGetAllowanceResponse
 */
export interface DaoTokenGetAllowanceResponse {
    /**
     * The number of tokens approved
     * @type {number}
     * @memberof DaoTokenGetAllowanceResponse
     */
    allowance: number;
}
/**
 * 
 * @export
 * @enum {string}
 */
export enum EnrollAdminInfo {
    SUCCESSFULLY_ENROLLED_ADMIN = 'Successfully enrolled admin user and imported it into the wallet',
    ORG_ADMIN_REGISTERED = 'ORG ADMIN REGISTERED'
}

/**
 * 
 * @export
 * @interface EnrollAdminV1Request
 */
export interface EnrollAdminV1Request {
    /**
     * 
     * @type {string}
     * @memberof EnrollAdminV1Request
     */
    orgName: string;
}
/**
 * 
 * @export
 * @interface EnrollAdminV1Response
 */
export interface EnrollAdminV1Response {
    /**
     * 
     * @type {string}
     * @memberof EnrollAdminV1Response
     */
    info: string;
    /**
     * 
     * @type {string}
     * @memberof EnrollAdminV1Response
     */
    orgName: string;
    /**
     * 
     * @type {string}
     * @memberof EnrollAdminV1Response
     */
    msp: string;
    /**
     * 
     * @type {string}
     * @memberof EnrollAdminV1Response
     */
    caName: string;
    /**
     * The key under which the identity created will be persisted to the keychain for later retrieval.
     * @type {string}
     * @memberof EnrollAdminV1Response
     */
    identityId?: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get the number of tokens `spender` is approved to spend on behalf of `account`
         * @param {DaoTokenGetAllowanceRequest} [daoTokenGetAllowanceRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        daoTokenGetAllowance: async (daoTokenGetAllowanceRequest?: DaoTokenGetAllowanceRequest, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-example-carbon-accounting-backend/dao-token/get-allowance`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof daoTokenGetAllowanceRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(daoTokenGetAllowanceRequest !== undefined ? daoTokenGetAllowanceRequest : {}) : (daoTokenGetAllowanceRequest || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Registers an admin account within the Fabric organization specified.
         * @param {EnrollAdminV1Request} [enrollAdminV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        enrollAdminV1: async (enrollAdminV1Request?: EnrollAdminV1Request, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/utilityemissionchannel/registerEnroll/admin`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof enrollAdminV1Request !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(enrollAdminV1Request !== undefined ? enrollAdminV1Request : {}) : (enrollAdminV1Request || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get the number of tokens `spender` is approved to spend on behalf of `account`
         * @param {DaoTokenGetAllowanceRequest} [daoTokenGetAllowanceRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async daoTokenGetAllowance(daoTokenGetAllowanceRequest?: DaoTokenGetAllowanceRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DaoTokenGetAllowanceResponse>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).daoTokenGetAllowance(daoTokenGetAllowanceRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Registers an admin account within the Fabric organization specified.
         * @param {EnrollAdminV1Request} [enrollAdminV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async enrollAdminV1(enrollAdminV1Request?: EnrollAdminV1Request, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EnrollAdminV1Response>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).enrollAdminV1(enrollAdminV1Request, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Get the number of tokens `spender` is approved to spend on behalf of `account`
         * @param {DaoTokenGetAllowanceRequest} [daoTokenGetAllowanceRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        daoTokenGetAllowance(daoTokenGetAllowanceRequest?: DaoTokenGetAllowanceRequest, options?: any): AxiosPromise<DaoTokenGetAllowanceResponse> {
            return DefaultApiFp(configuration).daoTokenGetAllowance(daoTokenGetAllowanceRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Registers an admin account within the Fabric organization specified.
         * @param {EnrollAdminV1Request} [enrollAdminV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        enrollAdminV1(enrollAdminV1Request?: EnrollAdminV1Request, options?: any): AxiosPromise<EnrollAdminV1Response> {
            return DefaultApiFp(configuration).enrollAdminV1(enrollAdminV1Request, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Get the number of tokens `spender` is approved to spend on behalf of `account`
     * @param {DaoTokenGetAllowanceRequest} [daoTokenGetAllowanceRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public daoTokenGetAllowance(daoTokenGetAllowanceRequest?: DaoTokenGetAllowanceRequest, options?: any) {
        return DefaultApiFp(this.configuration).daoTokenGetAllowance(daoTokenGetAllowanceRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Registers an admin account within the Fabric organization specified.
     * @param {EnrollAdminV1Request} [enrollAdminV1Request] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public enrollAdminV1(enrollAdminV1Request?: EnrollAdminV1Request, options?: any) {
        return DefaultApiFp(this.configuration).enrollAdminV1(enrollAdminV1Request, options).then((request) => request(this.axios, this.basePath));
    }
}


