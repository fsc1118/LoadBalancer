import HTTPResponseBuilder from "../../../src/builder/HTTP/HTTPResponseBuilder"
import RequiredFieldMissingError from "../../../src/error/builder/RequiredFieldMissingError"

describe('HTTPResponseBuilder', () => {

    it('should build a HTTPResponse with status, body, header fields as specified', () => {
        const response = new HTTPResponseBuilder()
            .status(200)
            .body("body")
            .headers(new Map([["header", "header"]]))
            .build()
        expect(response).toEqual({
            httpStatusCode: 200,
            body: "body",
            headers: new Map([["header", "header"]])
        })
    })

    it('should throw an error if status is not set', () => {
        expect(() => {
            new HTTPResponseBuilder()
                .body("body")
                .headers(new Map([["header", "header"]]))
                .build()
        }).toThrow(
            new RequiredFieldMissingError("statusCode")
        )
    })

    it('should throw an error if body is not set', () => {
        expect(() => {
            new HTTPResponseBuilder()
                .status(200)
                .headers(new Map([["header", "header"]]))
                .build()
        }).toThrow(
            new RequiredFieldMissingError("body")
        )
    })

    it('should throw an error if headers is not set', () => {
        expect(() => {
            new HTTPResponseBuilder()
                .status(200)
                .body("body")
                .build()
        }).toThrow(
            new RequiredFieldMissingError("headers")
        )
    })

    it('should not throw an error if otherField is not set', () => {
        expect(() => {
            new HTTPResponseBuilder()
                .status(200)
                .body("body")
                .headers(new Map([["header", "header"]]))
                .build()
        }).not.toThrow(
            new RequiredFieldMissingError("otherFields")
        )
    })
})