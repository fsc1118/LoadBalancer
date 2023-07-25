import ActionResult from "./ActionResult";

export default abstract class Action {
    abstract execute(): ActionResult
}