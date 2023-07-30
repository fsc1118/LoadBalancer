import HealthChecker from "../../src/healthchecker/HealthChecker"
import nock from "nock"
import Target from "../../src/target/Target"

describe("HealthChecker", () => {
    const port1 = 6778, port2 = 6779
    const endPoint1 = "http://test1.com", endPoint2 = "http://test2.com"
    const healthCheckPath1 = "health", healthCheckPath2 = "health"
    it("updates health status to be unhealthy if healthcheck endpoint returns non-200 status code", () => {
        nock.cleanAll()
        nock(endPoint1 + ":" + port1).persist().get(`/${healthCheckPath1}`).reply(400)
        nock(endPoint2 + ":" + port2).persist().get(`/${healthCheckPath2}`).reply(400)
        const target = [
            new Target(endPoint1, healthCheckPath1, "test1", port1),
            new Target(endPoint2, healthCheckPath2, "test2", port2)
        ]
        target[0].isHealthy = true
        target[1].isHealthy = true
        HealthChecker.init(target)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(1)
            }, 2500)
        }).then(() => {
            expect(target[0].isHealthy).toBe(false)
            expect(target[1].isHealthy).toBe(false)
        }).finally(() => {
            HealthChecker.stop()
            nock.cleanAll()
        })
    })
    it("updates the health status of the target according to healthcheck endpoint", () => {
        nock.cleanAll()
        nock(endPoint1 + ":" + port1).persist().get(`/${healthCheckPath1}`).reply(200)
        nock(endPoint2 + ":" + port2).persist().get(`/${healthCheckPath2}`).reply(200)
        const target = [
            new Target(endPoint1, healthCheckPath1, "test1", port1),
            new Target(endPoint2, healthCheckPath2, "test2", port2)
        ]
        expect(target[0].isHealthy).toBe(false)
        expect(target[1].isHealthy).toBe(false)
        HealthChecker.init(target)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(1)
            }, 2500)
        }).then(() => {
            expect(target[0].isHealthy).toBe(true)
            expect(target[1].isHealthy).toBe(true)
        }).finally(() => {
            HealthChecker.stop()
            nock.cleanAll()
        })
    })
    const DELAY = 10000
    it("updates the health status of the target if healthcheck timeout", () => {
        nock.cleanAll()
        nock(endPoint1 + ":" + port1).persist().get(`/${healthCheckPath1}`).delayConnection(DELAY).reply(200)
        nock(endPoint2 + ":" + port2).persist().get(`/${healthCheckPath2}`).delayConnection(DELAY).reply(200)
        const target = [
            new Target(endPoint1, healthCheckPath1, "test1", port1),
            new Target(endPoint2, healthCheckPath2, "test2", port2)
        ]
        target[0].isHealthy = true
        target[1].isHealthy = true
        HealthChecker.init(target)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(1)
            }, 7000)
        }).then(() => {
            expect(target[0].isHealthy).toBe(false)
            expect(target[1].isHealthy).toBe(false)
        }).finally(() => {
            HealthChecker.stop()
            nock.cleanAll()
        })
    }, DELAY)
})