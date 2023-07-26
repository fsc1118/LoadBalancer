import ActionResult from "../ActionResult"
import HTTPResponse from "../../model/HTTP/HTTPResponse"
import HTTPResponseBuilder from "../../builder/HTTP/HTTPResponseBuilder"
export default class FixedActionResult extends ActionResult {
    desiredFixedHttpresponse: HTTPResponse
    constructor(
        desiredStatusCode: number,
        desiredBody: string,
        desiredHeaders: Map<string, string>
    ) {
        super()
        this.desiredFixedHttpresponse = new HTTPResponseBuilder()
            .status(desiredStatusCode)
            .body(desiredBody)
            .headers(desiredHeaders)
            .build()
    }
    getActionResult(): ActionResult {
        return this
    }
}