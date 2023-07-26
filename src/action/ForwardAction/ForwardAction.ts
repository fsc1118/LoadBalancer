import Action from "../Action"
import ActionResult from "../ActionResult"

class ForwardAction extends Action {
    targetGroupName: string
    constructor(
        targetGroupName: string
    ) {
        super()
        this.targetGroupName = targetGroupName
    }
    execute(): ActionResult {
        throw new Error("Method not implemented.")
    }
}

export default ForwardAction