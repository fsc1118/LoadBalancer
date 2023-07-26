import HTTPRequestBuilder from "../../../src/builder/HTTP/HTTPRequestBuilder"
import RequiredFieldMissingError from "../../../src/error/builder/RequiredFieldMissingError"

describe("HTTPRequestBuilder", () => {
    it("should build a HTTPRequest with url, method, header, body, otherFields as specified", () => {
        const request = new HTTPRequestBuilder()
            .url("url")
            .method("method")
            .header(new Map([["header", "header"]]))
            .body("body")
            .otherFields(new Map([["otherFields", "otherFields"]]))
            .build()
        expect(request).toEqual({
            url: "url",
            method: "method",
            headers: new Map([["header", "header"]]),
            body: "body",
            otherFields: new Map([["otherFields", "otherFields"]])
        })
    })

    it("should throw an error if url is not set", () => {
        expect(() => {
            new HTTPRequestBuilder()
                .method("method")
                .header(new Map([["header", "header"]]))
                .body("body")
                .otherFields(new Map([["otherFields", "otherFields"]]))
                .build()
        }).toThrow(
            new RequiredFieldMissingError("url")
        )
    })

    it("should throw an error if method is not set", () => {
        expect(() => {
            new HTTPRequestBuilder()
                .url("url")
                .header(new Map([["header", "header"]]))
                .body("body")
                .otherFields(new Map([["otherFields", "otherFields"]]))
                .build()
        }).toThrow(
            new RequiredFieldMissingError("method")
        )
    })

    it("should throw an error if header is not set", () => {
        expect(() => {
            new HTTPRequestBuilder()
                .url("url")
                .method("method")
                .body("body")
                .otherFields(new Map([["otherFields", "otherFields"]]))
                .build()
        }).toThrow(
            new RequiredFieldMissingError("header")
        )
    })

    it("should throw an error if body is not set", () => {
        expect(() => {
            new HTTPRequestBuilder()
                .url("url")
                .method("method")
                .header(new Map([["header", "header"]]))
                .otherFields(new Map([["otherFields", "otherFields"]]))
                .build()
        }).toThrow(
            new RequiredFieldMissingError("body")
        )
    })
})