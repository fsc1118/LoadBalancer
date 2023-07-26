import ActionResult from "../ActionResult"

export default class RedirectActionResult extends ActionResult {
    endpoint: string
    port: number | undefined
    constructor(endpoint: string, port?: number) {
        super()
        this.endpoint = endpoint
        this.port = port
    }
    getActionResult(): ActionResult {
        return this
    }
}