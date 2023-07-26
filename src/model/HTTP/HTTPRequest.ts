export default class HTTPRequest {
    readonly method: string
    readonly url: string
    readonly headers: Map<string, string>
    readonly body: string
    readonly otherFields: Map<string, string> | undefined
    constructor(method: string, url: string, headers: any, body: string, otherFields?: Map<string, string>) {
        this.method = method
        this.url = url
        this.headers = headers
        this.body = body
        this.otherFields = otherFields
    }
}