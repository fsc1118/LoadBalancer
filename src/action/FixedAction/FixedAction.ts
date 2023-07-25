import Action from "../Action"
import HTTPStatusResponse from "../../model/HTTP/HTTPResponse"
import ActionResult from "../ActionResult"
import FixedActionResult from "./FixedActionResult"

/**
 * 
 * @description This class represents an action that returns a fixed HTTP Response.
 */
export default class FixedAction extends Action {
    desiredHTTPResponse: HTTPStatusResponse
    execute(): ActionResult {
        return new FixedActionResult(this.desiredHTTPResponse)
    }
    constructor(
        desiredHTTPResponse: HTTPStatusResponse
    ) {
        super()
        this.desiredHTTPResponse = desiredHTTPResponse
    }
}