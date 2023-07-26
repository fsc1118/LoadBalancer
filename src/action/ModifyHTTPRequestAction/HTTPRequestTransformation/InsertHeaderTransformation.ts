import HTTPRequest from "../../../model/HTTP/HTTPRequest"
import HTTPRequestTransformation from "./HTTPRequestTransformation"
export default class InsertHeaderTransformation extends HTTPRequestTransformation {
    newHeaders: Map<string, string>
    constructor(newHeaders: Map<string, string>) {
        super()
        this.newHeaders = newHeaders
    }
    transformHTTPRequest(httpRequest: HTTPRequest): HTTPRequest {
        this.newHeaders.forEach((value, key) => {
            httpRequest.headers.set(key, value)
        })
        return httpRequest
    }
}