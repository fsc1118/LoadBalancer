import RequiredFieldMissingError from "../../error/builder/RequiredFieldMissingError";
import HTTPRequest from "../../model/HTTP/HTTPRequest";

export default class HTTPRequestBuilder {
    private requestUrl: string | undefined
    private requestMethod: string | undefined
    private requestheader: Map<string, string> | undefined
    private requestbody: string | undefined
    private requestotherFields: Map<string, string> | undefined


    url(url: string): HTTPRequestBuilder {
        this.requestUrl = url
        return this
    }

    method(method: string): HTTPRequestBuilder {
        this.requestMethod = method
        return this
    }

    header(header: Map<string, string>): HTTPRequestBuilder {
        this.requestheader = header
        return this
    }

    body(body: string): HTTPRequestBuilder {
        this.requestbody = body
        return this
    }

    otherFields(otherFields: Map<string, string>): HTTPRequestBuilder {
        this.requestotherFields = otherFields
        return this
    }

    build(): HTTPRequest {
        if (!this.requestUrl) {
            throw new RequiredFieldMissingError("url")
        }
        if (!this.requestMethod) {
            throw new RequiredFieldMissingError("method")
        }
        if (!this.requestheader) {
            throw new RequiredFieldMissingError("header")
        }
        if (!this.requestbody) {
            throw new RequiredFieldMissingError("body")
        }
        return {
            url: this.requestUrl!,
            method: this.requestMethod!,
            headers: this.requestheader!,
            body: this.requestbody!,
            otherFields: this.requestotherFields
        }
    }
}