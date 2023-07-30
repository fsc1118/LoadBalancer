import Target from "../target/Target"
import http from "http"
const HEALTH_CHECK_INTERVAL = 2000
const TIMEOUT = 3000
export default class HealthChecker {
    private static intervalId: ReturnType<typeof setInterval>[] = []
    static init(targets: Array<Target>) {
        targets.forEach((target) => {
            this.intervalId.push(setInterval(() => {
                const url = target.endPoint + ":" + target.port + "/" + target.healthCheckPath
                const requestTimeout = setTimeout(() => {
                    clearTimeout(requestTimeout)
                    // Log error with timestamp
                    target.isHealthy = false
                }, TIMEOUT)
                const request = http.get(url, (response: http.IncomingMessage) => {
                    response.on("data", () => { })
                    response.on("end", () => {
                        if (response.statusCode === 200) {
                            target.isHealthy = true
                        } else {
                            target.isHealthy = false
                            // Log error with timestamp
                        }
                        clearTimeout(requestTimeout)
                    })
                })
                request.on("error", (error: Error) => {
                    // Log error with timestamp
                    clearTimeout(requestTimeout)
                    target.isHealthy = false
                })
            }, HEALTH_CHECK_INTERVAL))
        })
    }
    static stop() {
        this.intervalId.forEach((id) => {
            clearInterval(id)
        })
        this.intervalId.length = 0
    }
}