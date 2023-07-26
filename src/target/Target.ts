export default class Target {
    endPoint: string
    port: number = 80
    healthCheckPath: string
    name: string
    isHealthy: boolean = false
    constructor(
        endPoint: string,
        healthCheckPath: string,
        name: string,
        port?: number,
    ) {
        this.endPoint = endPoint
        this.healthCheckPath = healthCheckPath
        this.name = name
        if (port) {
            this.port = port
        }
    }
}