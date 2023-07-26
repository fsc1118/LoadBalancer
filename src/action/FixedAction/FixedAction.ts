import Action from "../Action"
import ActionResult from "../ActionResult"
import FixedActionResult from "./FixedActionResult"
import HTTPResponse from "../../model/HTTP/HTTPResponse"
/**
 * 
 * @description This class represents an action that returns a fixed HTTP Response.
 */
export default class FixedAction extends Action {

    private desiredStatusCode: number
    private desiredBody: string
    private desiredHeaders: Map<string, string>
    execute(): ActionResult {
        return new FixedActionResult(this.desiredStatusCode, this.desiredBody, this.desiredHeaders)
    }
    constructor(
        status: number,
        body: string,
        headers: Map<string, string>
    ) {
        super()
        this.desiredStatusCode = status
        this.desiredBody = body
        this.desiredHeaders = headers
    }
}