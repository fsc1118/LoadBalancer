import InvalidHttpStatusCodeError from "../../error/HTTP/InvalidHttpStatusCodeError"
/**
 * 
 * @description This class represents an HTTP response.
 * @throws {InvalidHttpStatusCodeError} if the HTTP status code is not valid
 */

export default class HTTPResponse {
    readonly httpStatusCode: number
    readonly headers: Map<string, string>
    readonly body: string
    constructor(
        httpStatusCode: number,
        headers: Map<string, string>,
        body: string
    ) {
        if (httpStatusCode < 100 || httpStatusCode > 599) {
            throw new InvalidHttpStatusCodeError(httpStatusCode)
        }
        this.httpStatusCode = httpStatusCode
        this.headers = headers
        this.body = body
    }
}