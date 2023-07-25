export default class HTTPRequest {
    method: string
    url: string
    headers: Map<string, string>
    body: string
    otherFields: Map<string, string> | undefined
    constructor(method: string, url: string, headers: any, body: string, otherFields?: Map<string, string>) {
        this.method = method
        this.url = url
        this.headers = headers
        this.body = body
        this.otherFields = otherFields
    }
}