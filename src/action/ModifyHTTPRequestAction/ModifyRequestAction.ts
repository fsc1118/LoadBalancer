import HTTPRequest from "../../model/HTTP/HTTPRequest"
import Action from "../Action"
import ActionResult from "../ActionResult"
import HTTPRequestTransformation from "./HTTPRequestTransformation/HTTPRequestTransformation"
import ModifyRequestActionResult from "./ModifyRequestActionResult"


/**
 * 
 * @category Actions
 * 
 * @description
 * This action modifies the request before forwarding it to the target group.
 */

class ModifyRequestAction extends Action {

    request: HTTPRequest
    transformations: Array<HTTPRequestTransformation>
    constructor(
        request: HTTPRequest,
        transformations: Array<HTTPRequestTransformation>
    ) {
        super()
        this.request = request
        this.transformations = transformations
    }
    execute(): ActionResult {
        this.transformations.forEach(transformation => {
            this.request = transformation.transformHTTPRequest(this.request)
        })
        return new ModifyRequestActionResult(this.request)
    }
}