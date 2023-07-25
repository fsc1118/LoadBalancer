import HTTPResponse from "../../src/model/HTTP/HTTPResponse"
import InvalidHttpStatusCodeError from "../../src/error/HTTP/InvalidHttpStatusCodeError"
describe("HTTPResponse", () => {
    it("throws invalidHTTPStatusCodeError if the HTTP status code is not valid", () => {
        expect(() => {
            new HTTPResponse(600, new Map<string, string>(), "")
        }).toThrow(InvalidHttpStatusCodeError)
        expect(() => {
            new HTTPResponse(99, new Map<string, string>(), "")
        }).toThrow(InvalidHttpStatusCodeError)
    })
    it("does not throw invalidHTTPStatusCodeError if the HTTP status code is valid", () => {
        expect(() => {
            new HTTPResponse(100, new Map<string, string>(), "")
        }).not.toThrow(InvalidHttpStatusCodeError)
        expect(() => {
            new HTTPResponse(599, new Map<string, string>(), "")
        }).not.toThrow(InvalidHttpStatusCodeError)
    })
    it("returns the correct status code as specified from constructor", () => {
        const desiredStatusCode = 200
        const httpResponse = new HTTPResponse(desiredStatusCode, new Map<string, string>(), "")
        expect(httpResponse.httpStatusCode).toBe(desiredStatusCode)
    })
    it("returns the correct headers as specified from constructor", () => {
        const desiredHeaders = new Map<string, string>()
        desiredHeaders.set("Content-Type", "text/html")
        const httpResponse = new HTTPResponse(200, desiredHeaders, "")
        expect(httpResponse.headers).toBe(desiredHeaders)
    })

    it("returns the correct body as specified from constructor", () => {
        const desiredBody = "Hello World"
        const httpResponse = new HTTPResponse(200, new Map<string, string>(), desiredBody)
        expect(httpResponse.body).toBe(desiredBody)
    })
})