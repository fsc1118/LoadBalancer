import Action from '../Action'
import ActionResult from '../ActionResult'
import RedirectActionResult from "./RedirectActionResult"
export default class RedirectAction extends Action {
    endpoint: string
    port: number | undefined
    execute(): ActionResult {
        return new RedirectActionResult(this.endpoint, this.port)
    }
    constructor(endpoint: string, port?: number) {
        super()
        this.endpoint = endpoint
        this.port = port
    }
}