import Action from "../Action"
import ActionResult from "../ActionResult"
import AuthActionResult from "./AuthActionResult"
import { Request } from "express"
export default class AuthAction extends Action {
    authToken: string | undefined
    execute = (): ActionResult => {
        if (!this.authToken) {
            return new AuthActionResult(false, "No auth token provided")
        }
        return new AuthActionResult(true, "Auth token provided")
    }
    constructor(req: Request) {
        super()
        this.authToken = req.headers.authorization
    }
}