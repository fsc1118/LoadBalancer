import Target from "../target/Target"
import TargetGroupRoutingPolicy from "./TargetGroupRoutingPolicy"

export default class TargetGroup {
    targetGroupName: string
    targets: Array<Target> = []
    routingPolicy: TargetGroupRoutingPolicy
    constructor(targetGroupName: string, routingPolicy: TargetGroupRoutingPolicy) {
        this.targetGroupName = targetGroupName
        this.routingPolicy = routingPolicy
    }

    addTarget(target: Target) {
        this.targets.push(target)
    }
}