import RequiredFieldMissingError from "../../error/builder/RequiredFieldMissingError"
import Auth from "../../model/Auth/Auth"

export default class AuthBuilder {
    constructor() {

    }
    private endPoint: string | undefined
    private method: string | undefined
    private port: number | undefined
    private headerKey: string | undefined

    authEndpoint(endPoint: string): AuthBuilder {
        this.endPoint = endPoint
        return this
    }

    authMethod(method: string): AuthBuilder {
        this.method = method
        return this
    }

    authPort(port: number): AuthBuilder {
        this.port = port
        return this
    }

    /**
     * 
     * @description The key to query for the auth token in the request header.
     */

    authHeaderKey(headerKey: string): AuthBuilder {
        this.headerKey = headerKey
        return this
    }

    build(): Auth {
        if (!this.endPoint) {
            throw new RequiredFieldMissingError("endPoint")
        }
        if (!this.method) {
            throw new RequiredFieldMissingError("method")
        }
        if (!this.authHeaderKey) {
            throw new RequiredFieldMissingError("headerKey")
        }
        return {
            endPoint: this.endPoint!,
            method: this.method!,
            port: this.port,
            headerKey: this.headerKey!
        }
    }
}