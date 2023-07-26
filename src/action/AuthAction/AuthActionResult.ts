import ActionResult from "../ActionResult"

export default class AuthActionResult extends ActionResult {
    getActionResult(): ActionResult {
        return this
    }
    isAuthenticationSuccessful: boolean
    message: string
    constructor(isAuthenticationSuccessful: boolean, message: string) {
        super()
        this.isAuthenticationSuccessful = isAuthenticationSuccessful
        this.message = message
    }
}