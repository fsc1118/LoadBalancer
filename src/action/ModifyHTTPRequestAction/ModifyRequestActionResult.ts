import HTTPRequest from "../../model/HTTP/HTTPRequest"
import ActionResult from "../ActionResult"

export default class ModifyRequestActionResult extends ActionResult {
    desiredModifiedRequest: HTTPRequest
    constructor(desiredModifiedRequest: HTTPRequest) {
        super()
        this.desiredModifiedRequest = desiredModifiedRequest
    }
    getActionResult(): ActionResult {
        return this
    }
}