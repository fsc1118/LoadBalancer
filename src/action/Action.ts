import ActionResult from "./ActionResult"
import { Request } from "express"
export default abstract class Action {
    abstract execute(req: Request): ActionResult
}