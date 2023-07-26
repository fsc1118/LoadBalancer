import HTTPRequest from "../../../model/HTTP/HTTPRequest";
export default abstract class HTTPRequestTransformation {
    abstract transformHTTPRequest(
        httpRequest: HTTPRequest
    ): HTTPRequest
}