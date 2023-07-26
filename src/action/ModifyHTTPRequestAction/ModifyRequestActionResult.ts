import ActionResult from "../ActionResult"
import HTTPRequest from "../../model/HTTP/HTTPRequest"

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