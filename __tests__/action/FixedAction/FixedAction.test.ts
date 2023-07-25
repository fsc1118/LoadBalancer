import FixedAction from "../../../src/action/FixedAction/FixedAction"
import FixedActionResult from "../../../src/action/FixedAction/FixedActionResult"
import HTTPResponse from "../../../src/model/HTTP/HTTPResponse"
import { isEqual } from "lodash"

describe("FixedAction", () => {
    it("returns result identical to the input", () => {
        const desiredHTTPResponse = new HTTPResponse(200, new Map(), "Hello World")
        const actionResult = new FixedAction(desiredHTTPResponse).execute()
        expect(actionResult).toBeInstanceOf(FixedActionResult)
        const fixedActionResult = actionResult as FixedActionResult
        expect(isEqual(fixedActionResult.desiredFixedHttpresponse, desiredHTTPResponse)).toBe(true)
    })
})