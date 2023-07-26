import RequiredFieldMissingError from "../../error/builder/RequiredFieldMissingError"
import HTTPResponse from "../../model/HTTP/HTTPResponse"

export default class HTTPResponseBuilder {
    private statusCode: number | undefined
    private responseBody: string | undefined
    private responseHeaders: Map<string, string> | undefined

    constructor() { }

    status(statusCode: number): HTTPResponseBuilder {
        this.statusCode = statusCode
        return this
    }

    body(body: string): HTTPResponseBuilder {
        this.responseBody = body
        return this
    }

    headers(headers: Map<string, string>): HTTPResponseBuilder {
        this.responseHeaders = headers
        return this
    }

    build(): HTTPResponse {
        if (!this.statusCode) {
            throw new RequiredFieldMissingError("statusCode")
        }
        if (!this.responseBody) {
            throw new RequiredFieldMissingError("body")
        }
        if (!this.responseHeaders) {
            throw new RequiredFieldMissingError("headers")
        }
        return {
            httpStatusCode: this.statusCode!,
            body: this.responseBody!,
            headers: this.responseHeaders!
        }
    }

}