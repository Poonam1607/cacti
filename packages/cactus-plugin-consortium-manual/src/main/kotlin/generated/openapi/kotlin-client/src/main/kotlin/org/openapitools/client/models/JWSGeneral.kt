/**
 * Hyperledger Cactus Plugin - Consortium Web Service
 *
 * Manage a Cactus consortium through the APIs. Needs administrative privileges.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package org.openapitools.client.models

import org.openapitools.client.models.JWSRecipient

import com.squareup.moshi.Json

/**
 * 
 *
 * @param payload 
 * @param signatures 
 */

data class JWSGeneral (

    @Json(name = "payload")
    val payload: kotlin.String,

    @Json(name = "signatures")
    val signatures: kotlin.collections.List<JWSRecipient>

)
