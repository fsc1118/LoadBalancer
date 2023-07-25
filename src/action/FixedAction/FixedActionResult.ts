import HTTPResponse from "../../model/HTTP/HTTPResponse";
import ActionResult from "../ActionResult";

export default class FixedActionResult extends ActionResult {
    desiredFixedHttpresponse: HTTPResponse
    constructor(desiredFixedHttpresponse: HTTPResponse) {
        super()
        this.desiredFixedHttpresponse = desiredFixedHttpresponse
    }
    getActionResult(): ActionResult {
        return this
    }
}