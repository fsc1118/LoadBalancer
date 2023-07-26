import ActionResult from "../ActionResult"
export default class ForwardActionResult extends ActionResult {
    getActionResult(): ActionResult {
        return this
    }
}