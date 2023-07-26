import FixedAction from "../../../src/action/FixedAction/FixedAction"
import FixedActionResult from "../../../src/action/FixedAction/FixedActionResult"

describe("FixedAction", () => {
    it("returns result identical to the input", () => {
        const desiredHTTPResponseStatusCode = 200
        const desiredHTTPResponseBody = "Hello World"
        const desiredHTTPResponseHeaders = new Map([
            ["Host", "www.google.com"],
            ["User-Agent", "Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0"],
        ])
        const actionResult = new FixedAction(
            desiredHTTPResponseStatusCode,
            desiredHTTPResponseBody,
            desiredHTTPResponseHeaders
        ).execute().getActionResult()
        expect(actionResult).toBeInstanceOf(FixedActionResult)
        const response = (actionResult as FixedActionResult).desiredFixedHttpresponse
        expect(response.httpStatusCode).toBe(desiredHTTPResponseStatusCode)
        expect(response.body).toBe(desiredHTTPResponseBody)
        expect(response.headers).toBe(desiredHTTPResponseHeaders)
    })
})