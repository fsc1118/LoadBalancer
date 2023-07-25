import Action from "../Action"
import ActionResult from "../ActionResult"

class ForwardAction extends Action {
    targetGroupId: string
    constructor(
        targetGroupId: string
    ) {
        super()
        this.targetGroupId = targetGroupId
    }
    execute(): ActionResult {
        throw new Error("Method not implemented.")
    }
}

export default ForwardAction